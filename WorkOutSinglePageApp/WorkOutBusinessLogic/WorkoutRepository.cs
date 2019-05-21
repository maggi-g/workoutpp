using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOutBusinessLogic
{
    public class WorkoutRepository
    {
        public void AddWorkout (workoutcollection  objcollection)
        {
            try
            {
                using (var objcontext = new WorkoutSPAEntities())
                {
                    objcontext.workoutcollections.Add(objcollection);
                    objcontext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
