using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace WorkOutBusinessLogic
{
    public class CategoryRepository
    {
      
        public IEnumerable<workoutcategory> GetAllCategories()
        {
            
            try
            {
                using (var objcontext = new WorkoutSPAEntities1())
                {
                    var query = from obj in objcontext.workoutcategories
                                select obj;
                    return query.ToArray();
                }
                
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
         
        public void AddCategory(workoutcategory objcategory)
        {
            try
            {
                using (var objcontext = new WorkoutSPAEntities1())
                {
                    objcontext.workoutcategories.Add(objcategory);
                    objcontext.SaveChanges();
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
        }

        public void SearchCategory(string name)
        {
            try
            {
                using (var objcontext = new WorkoutSPAEntities1())
                {
                    var query = (from obj in objcontext.workoutcategories
                                where obj.categoryname == name
                                select obj).FirstOrDefault();
                    
                }
            }
            catch(Exception ex)
            {
                throw ex;

            }
        }


        public void EditCategory(workoutcategory item)
        {
            try
            {
                using (var objcontext = new WorkoutSPAEntities1())
                {
                    var query = from obj in objcontext.workoutcategories
                                select obj;
                    
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
