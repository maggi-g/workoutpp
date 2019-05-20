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
            
            int Expected = 3 ;
            var Actual = obj.GetAllCategories().Count();
            Assert.AreEqual(Expected, Actual);
        }
    }
}

