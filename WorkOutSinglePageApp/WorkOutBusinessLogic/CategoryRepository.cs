using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data.Entity;
namespace WorkOutBusinessLogic
{
    
    public class CategoryRepository
    {
        WorkoutSPAEntities objcontext;
        public CategoryRepository()
        {
            objcontext = new WorkoutSPAEntities();
        }
      
        public IEnumerable<workoutcategory> GetAllCategories()
        {
           
            try
            {
                var query = from obj in objcontext.workoutcategories
                            select obj;
                return query.ToList();
               
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
                using (var objcontext = new WorkoutSPAEntities())
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
                using (var objcontext = new WorkoutSPAEntities())
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


        public void EditCategory(workoutcategory objcategory)
        {
            try
            {
                using (WorkoutSPAEntities objContext = new WorkoutSPAEntities())
                {

                    objContext.workoutcategories.Attach(objcategory);
                    objContext.Entry(objcategory).State = System.Data.Entity.EntityState.Modified;
                    objContext.SaveChanges();

                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
