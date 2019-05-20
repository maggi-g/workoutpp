using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WorkOutBusinessLogic;
namespace WebApiWorkOut.Controllers
{
    public class categoryController : ApiController
    {
        WorkoutSPAEntities db = new WorkoutSPAEntities();
        public IHttpActionResult Get()
        {
            return Ok(db.workoutcategories.ToArray());
        }

        public IHttpActionResult post(workoutcategory obj)
        {
            db.workoutcategories.Add(obj);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest("not saved");
            }
        }


        public IHttpActionResult Delete(int id)
        {
            var obj = db.workoutcategories.Find(id);
            if(obj==null)
            {
                return NotFound();
            }
            db.workoutcategories.Remove(obj);
            var NoOfRowsAffected = db.SaveChanges();
            if(NoOfRowsAffected>0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed To Delete");
            }
        }


        public IHttpActionResult Put(workoutcategory obj)
        {
            db.workoutcategories.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            var NoOfRowsAffected = db.SaveChanges();
            if(NoOfRowsAffected>0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed to Edit");
            }
        }
    }
}
