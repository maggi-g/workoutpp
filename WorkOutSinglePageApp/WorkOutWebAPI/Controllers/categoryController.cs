using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WorkOutBusinessLogic;
namespace WorkOutWebAPI.Controllers
{
    public class categoryController : ApiController
    {
        WorkoutSPAEntities1 db = new WorkoutSPAEntities1();
        public IHttpActionResult Get()
        {
            
            return Ok(db.workoutcategories.ToList());
        }
        public IHttpActionResult Post(workoutcategory obj)
        {

            db.workoutcategories.Add(obj);
            int NoOfRowsAffected = db.SaveChanges();
            if(NoOfRowsAffected>0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            return BadRequest("Failed to Add Category");
        }

      //  public IHttpActionResult Put(workoutcategory obj)
        //{
          //  db.workoutcategories.Attach(obj);
            //db.Entry(obj).s
        //}
    }
}
