using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace WorkOutBusinessLogic.test
{
    [TestFixture]
    public class viewcategorieslisttest
    {
        
        [Test]
        public void GetAllCategoriesTest()
        {
            workoutcategory obj = new workoutcategory();
            var repo = new CategoryRepository();
            var Expected = 0;
            var Actual = repo.GetAllCategories();
            Assert.AreEqual(Expected, Actual);
        }
    }
}

