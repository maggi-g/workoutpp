﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WorkOutBusinessLogic
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class WorkoutSPAEntities : DbContext
    {
        public WorkoutSPAEntities()
            : base("name=WorkoutSPAEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<workoutactive> workoutactives { get; set; }
        public virtual DbSet<workoutcategory> workoutcategories { get; set; }
        public virtual DbSet<workoutcollection> workoutcollections { get; set; }
    }
}
