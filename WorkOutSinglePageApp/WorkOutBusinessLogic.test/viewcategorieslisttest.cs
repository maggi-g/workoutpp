using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using WorkOutBusinessLogic;
namespace WorkOutBusinessLogic.test
{
    [TestFixture]
    public class viewcategorieslisttest
    {
        
        [Test]
        public void GetAllCategoriesTest()
        {
            CategoryRepository obj = new CategoryRepository();
            WorkoutSPAEntities1 obj1 = new WorkoutSPAEntities1();
            var Expected = obj.GetAllCategories();
            IEnumerable<workoutcategory> Actual =obj.GetAllCategories();
            Assert.AreEqual(Expected, Actual);
        }
    }
}

