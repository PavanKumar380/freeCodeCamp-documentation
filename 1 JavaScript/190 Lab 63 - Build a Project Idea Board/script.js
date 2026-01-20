const projectStatus = {
  'PENDING': {
    description: "Pending Execution"
  },
  'SUCCESS': {
    description: "Executed Successfully"
  },
  'FAILURE': {
    description: "Execution Failed"
  }
};

class ProjectIdea {
  
  constructor(title, description, status = projectStatus['PENDING']) {
    this.title = title;
    this.description = description;
    this.status = status;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }

};

class ProjectIdeaBoard {
  
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(pIdea) {
    this.ideas.push(pIdea);
  }

  unpin(pIdea) {
    this.ideas = this.ideas.filter(id => id !== pIdea);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let str = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(id => {
      str += `${id.title} (${id.status.description}) - ${id.description}\n`;
    });
    return str;
  }

};