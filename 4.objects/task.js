function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = rest;
  } else {
    for (let i = 0; i < rest.length; i++) {
      this.marks.push(rest[i]);
    }
  }

  Student.prototype.getAverage = function () {
    let sum = 0;
    for (let k = 0; k < this.marks.length; k++)
      sum += this.marks[k];

    return sum / this.marks.length
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}