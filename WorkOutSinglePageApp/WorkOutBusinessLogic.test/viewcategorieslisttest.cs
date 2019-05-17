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
        workoutcategory obj;
        [Test]
        public void GetAllCategoriesTest()
        {
            var Expected = 0;
            var Actual = obj;
            Assert.AreEqual(Expected, Actual);

        }
    }
}

