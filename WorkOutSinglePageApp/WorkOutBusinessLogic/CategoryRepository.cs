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
      
        public List<workoutcategory> GetAllCategories()
        {
            List<workoutcategory> objcategory = new List<workoutcategory>();
            try
            {
                using (WorkoutSPAEntities1 objcontext = new WorkoutSPAEntities1())
                {
                    var query = from obj in objcontext.workoutcategories
                                select obj;
                    foreach(var item in query)
                    {
                        objcategory.Add(new workoutcategory { categoryid=item.categoryid,categoryname=item.categoryname });
                    }
                }

                return objcategory;
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
                                select new
                                {
                                    obj.categoryname
                                };
                    
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
