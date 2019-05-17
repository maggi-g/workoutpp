using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace WorkOutBusinessLogic
{
    public class CategoryRepository
    {
        WorkoutSPAEntities1 db = new WorkoutSPAEntities1();
        public List<workoutcategory> GetAllCategories()
        {
          return db.workoutcategories.ToList();
        }
    }
}
