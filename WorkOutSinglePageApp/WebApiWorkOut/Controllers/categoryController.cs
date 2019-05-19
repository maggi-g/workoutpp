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
    }
}
