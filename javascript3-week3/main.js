class Job {
    constructor(id, title, description, startDate, endDate) {
      this.id = id;
      this.title = title;
    }
  }
  
  class CV {
    constructor(jobs, educations, email) {
      // write code here
      this.jobs = jobs;
      this.educations = educations;
      this.email = email;
    }
  
    addJob(job) {
      // add functionality here
      // if(typeof job !== 'object')
      //   throw 'Job is not an object';
  
      if (!(job instanceof Job)) throw "addJob only accepts Job(s)";
  
      this.jobs.push(job);
    }
  
    removeJob(job) {
      // add functionality here
      const index = this.jobs.indexOf(job);
      this.jobs.splice(index, 1);
    }
  
    addEducation(education) {
      // add functionality here
    }
  
    removeEducation(education) {
      // add functionality here
    }
  }
  
  const rohitCV = new CV(12, "chef", "rs@rohit.sh");
  const job1 = new Job(1, "Datarobot");
  rohitCV.addJob(job1);
  // rohitCV.removeJob(job1);
  try {
    // rohitCV.addJob("some job");
  
    rohitCV.addJob({
      id: 3
    });
  } catch (e) {
    console.error(e);
  }
  
  console.log(rohitCV);
  