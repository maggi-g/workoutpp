using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WorkOutBusinessLogic;
namespace WorkOutWebAPI.Controllers
{
    public class categories : ApiController
    {
        WorkoutSPAEntities1 obj = new WorkoutSPAEntities1();
        public IHttpActionResult Get()
        {
            return Ok(obj.workoutcategories.ToList());
        }
    }
}
