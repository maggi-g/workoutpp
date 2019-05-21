using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WorkOutBusinessLogic;
namespace WebApiWorkOut.Controllers
{
    public class workoutController : ApiController
    {
        WorkoutSPAEntities db = new WorkoutSPAEntities();
        public IHttpActionResult post(workoutcollection obj)
        {
           
            db.workoutcollections.Add(obj);
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

        public IHttpActionResult Get()
        {
            return Ok(db.workoutcollections.ToArray());
        }

    }
}
