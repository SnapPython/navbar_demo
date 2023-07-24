// index.js
Page({
  data: {
    selectedYear: 1, 
    scoreDataMap: {
      "1": {
        "gpa4": "4.0",
        "gpa5": "5.0",
        "subjects": [
          { "subject": '语文', "score": '90' },
          { "subject": '数学', "score": '85' },
          { "subject": '英语', "score": '95' }
        ]
      },
      '2': {
        gpa4: '3.5',
        gpa5: '4.2',
        subjects: [
          { subject: '物理', score: '88' },
          { subject: '化学', score: '92' },
          { subject: '生物', score: '87' }
        ]
      },
      '3': {
        gpa4: '3.2',
        gpa5: '4.0',
        subjects: [
          { subject: '历史', score: '92' },
          { subject: '地理', score: '85' },
          { subject: '政治', score: '90' }
        ]
      },
      '4': {
        gpa4: '3.8',
        gpa5: '4.6',
        subjects: [
          { subject: '物理', score: '90' },
          { subject: '化学', score: '88' },
          { subject: '生物', score: '95' }
        ]
      }
    }
  },

  handleNavYear(event) {
    const year = event.currentTarget.dataset.year;
    this.setData({
      selectedYear: year
    });
  },


});
