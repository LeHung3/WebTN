function createData() {
    createUser()
    createExam()
}
localStorage.setItem("userLoggedIn",JSON.stringify({}))
function createUser(){
    var users=JSON.parse(localStorage.getItem("user")) || [];
    if(users.length===0){
        users.push({
            userId:"admin",
            username:"admin",
            email:"admin@gmail.com",
            password:"1",
            role:"admin"
        })
        users.push({
            userId:"B21DCCN611",
            username:"nguyen minh quan",
            email:"nnmhqn2003@gmail.com",
            password:"1",
            role:"admin"
        })
        users.push({
            userId:"B21DCCN803",
            username:"nguyen minh vuong",
            email:"vuong@gmail.com",
            password:"1",
            role:"admin"
        })
        users.push({
            userId:"B21DCCN004",
            username:"dinh the anh",
            email:"anh@gmail.com",
            password:"1",
            role:"admin"
        })
        users.push({
            userId:"B21DCCN059",
            username:"vu le hung",
            email:"hung@gmail.com",
            password:"1",
            role:"admin"
        })
        users.push({
            userId:"B21DCCN001",
            username:"chuc",
            email:"chuc@gmail.com",
            password:"123",
            role:"user"
        })
        users.push({
            userId:"B21DCCN002",
            username:"mung",
            email:"mung@gmail.com",
            password:"123",
            role:"user"
        })
        users.push({
            userId:"B21DCCN003",
            username:"nam",
            email:"nam@gmail.com",
            password:"123",
            role:"user"
        })
        users.push({
            userId:"B21DCCN005",
            username:"moi",
            email:"moi@gmail.com",
            password:"123",
            role:"user"
        })
        
        localStorage.setItem("user",JSON.stringify(users))
        
    }
    
}

function createExam(){
    var exams=JSON.parse(localStorage.getItem("exam")) || []
    if(exams.length===0){
        exams.push({
              examId: 1,
              examName: "Kiểm tra cuối kỳ",
              description: "Kiểm tra toàn bộ nội dung học kỳ",
              examType: "Scheduled",
              openTime: "2024-03-01T23:04",
              questions: [
                    {
                        questionId: 1,
                        question: "Câu hỏi 1",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 1",
                            B: "Câu trả lời B cho câu hỏi 1",
                            C: "Câu trả lời C cho câu hỏi 1",
                            D: "Câu trả lời D cho câu hỏi 1"
                        },
                        correctAnswer: "B"
                    },
                    {
                        questionId: 2,
                        question: "Câu hỏi 2",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 2",
                            B: "Câu trả lời B cho câu hỏi 2",
                            C: "Câu trả lời C cho câu hỏi 2",
                            D: "Câu trả lời D cho câu hỏi 2"
                        },
                        correctAnswer: "C"
                    },
                    {
                        questionId: 3,
                        question: "Câu hỏi 3",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 3",
                            B: "Câu trả lời B cho câu hỏi 3",
                            C: "Câu trả lời C cho câu hỏi 3",
                            D: "Câu trả lời D cho câu hỏi 3"
                        },
                        correctAnswer: "D"
                    },
                    {
                      questionId: 4,
                      question: "Câu hỏi 4",
                      answers: {
                          A: "Câu trả lời A cho câu hỏi 4",
                          B: "Câu trả lời B cho câu hỏi 4",
                          C: "Câu trả lời C cho câu hỏi 4",
                          D: "Câu trả lời D cho câu hỏi 4"
                      },
                      correctAnswer: "A"
                    },
                    {
                        questionId: 5,
                        question: "Câu hỏi 5",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 5",
                            B: "Câu trả lời B cho câu hỏi 5",
                            C: "Câu trả lời C cho câu hỏi 5",
                            D: "Câu trả lời D cho câu hỏi 5"
                        },
                        correctAnswer: "B"
                    },
                    {
                        questionId: 6,
                        question: "Câu hỏi 6",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 6",
                            B: "Câu trả lời B cho câu hỏi 6",
                            C: "Câu trả lời C cho câu hỏi 6",
                            D: "Câu trả lời D cho câu hỏi 6"
                        },
                        correctAnswer: "C"
                    },
                    {
                      questionId: 7,
                      question: "Câu hỏi 7",
                      answers: {
                          A: "Câu trả lời A cho câu hỏi 7",
                          B: "Câu trả lời B cho câu hỏi 7",
                          C: "Câu trả lời C cho câu hỏi 7",
                          D: "Câu trả lời D cho câu hỏi 7"
                      },
                      correctAnswer: "D"
                    },
                    {
                        questionId: 8,
                        question: "Câu hỏi 8",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 8",
                            B: "Câu trả lời B cho câu hỏi 8",
                            C: "Câu trả lời C cho câu hỏi 8",
                            D: "Câu trả lời D cho câu hỏi 8"
                        },
                        correctAnswer: "A"
                    },
                    {
                        questionId: 9,
                        question: "Câu hỏi ",
                        answers: {
                            A: "Câu trả lời A cho câu hỏi 9",
                            B: "Câu trả lời B cho câu hỏi 9",
                            C: "Câu trả lời C cho câu hỏi 9",
                            D: "Câu trả lời D cho câu hỏi 9"
                        },
                        correctAnswer: "A"
                    },
                    {
                      questionId: 10,
                      question: "Câu hỏi 10",
                      answers: {
                          A: "Câu trả lời A cho câu hỏi 10",
                          B: "Câu trả lời B cho câu hỏi 10",
                          C: "Câu trả lời C cho câu hỏi 10",
                          D: "Câu trả lời D cho câu hỏi 10"
                      },
                      correctAnswer: "B"
                    }
                ]
          }
        )

        exams.push({
          examId: 2,
          examName: "Kiểm tra giữa kỳ",
          description: "Kiểm tra cho D21CNTT",
          examType: "Scheduled",
          openTime: "2024-03-28T23:04",
          questions: [
            {
              questionId: 1,
              question: "Câu hỏi 1",
              answers: {
                  A: "Câu trả lời A cho câu hỏi 1",
                  B: "Câu trả lời B cho câu hỏi 1",
                  C: "Câu trả lời C cho câu hỏi 1",
                  D: "Câu trả lời D cho câu hỏi 1"
              },
              correctAnswer: "A"
            },
            {
                questionId: 2,
                question: "Câu hỏi 2",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 2",
                    B: "Câu trả lời B cho câu hỏi 2",
                    C: "Câu trả lời C cho câu hỏi 2",
                    D: "Câu trả lời D cho câu hỏi 2"
                },
                correctAnswer: "B"
            },
            {
                questionId: 3,
                question: "Câu hỏi 3",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 3",
                    B: "Câu trả lời B cho câu hỏi 3",
                    C: "Câu trả lời C cho câu hỏi 3",
                    D: "Câu trả lời D cho câu hỏi 3"
                },
                correctAnswer: "C"
            },
            {
              questionId: 4,
              question: "Câu hỏi 4",
              answers: {
                  A: "Câu trả lời A cho câu hỏi 4",
                  B: "Câu trả lời B cho câu hỏi 4",
                  C: "Câu trả lời C cho câu hỏi 4",
                  D: "Câu trả lời D cho câu hỏi 4"
              },
              correctAnswer: "D"
            },
            {
                questionId: 5,
                question: "Câu hỏi 5",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 5",
                    B: "Câu trả lời B cho câu hỏi 5",
                    C: "Câu trả lời C cho câu hỏi 5",
                    D: "Câu trả lời D cho câu hỏi 5"
                },
                correctAnswer: "A"
            },
            {
                questionId: 6,
                question: "Câu hỏi 6",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 6",
                    B: "Câu trả lời B cho câu hỏi 6",
                    C: "Câu trả lời C cho câu hỏi 6",
                    D: "Câu trả lời D cho câu hỏi 6"
                },
                correctAnswer: "B"
            },
            {
              questionId: 7,
              question: "Câu hỏi 7",
              answers: {
                  A: "Câu trả lời A cho câu hỏi 7",
                  B: "Câu trả lời B cho câu hỏi 7",
                  C: "Câu trả lời C cho câu hỏi 7",
                  D: "Câu trả lời D cho câu hỏi 7"
              },
              correctAnswer: "C"
            },
            {
                questionId: 8,
                question: "Câu hỏi 8",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 8",
                    B: "Câu trả lời B cho câu hỏi 8",
                    C: "Câu trả lời C cho câu hỏi 8",
                    D: "Câu trả lời D cho câu hỏi 8"
                },
                correctAnswer: "D"
            },
            {
                questionId: 9,
                question: "Câu hỏi ",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 9",
                    B: "Câu trả lời B cho câu hỏi 9",
                    C: "Câu trả lời C cho câu hỏi 9",
                    D: "Câu trả lời D cho câu hỏi 9"
                },
                correctAnswer: "A"
            },
            {
              questionId: 10,
              question: "Câu hỏi 10",
              answers: {
                  A: "Câu trả lời A cho câu hỏi 10",
                  B: "Câu trả lời B cho câu hỏi 10",
                  C: "Câu trả lời C cho câu hỏi 10",
                  D: "Câu trả lời D cho câu hỏi 10"
              },
              correctAnswer: "B"
            }
            ]
          }
        )

        exams.push({
          examId: 3,
          examName: "Luyện tập",
          description: "Luyện tập làm web",
          examType: "Free-acces",
          openTime: null,
          questions: [
              {
                questionId: 1,
                question: "Câu hỏi 1",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 1",
                    B: "Câu trả lời B cho câu hỏi 1",
                    C: "Câu trả lời C cho câu hỏi 1",
                    D: "Câu trả lời D cho câu hỏi 1"
                },
                correctAnswer: "D"
              },
              {
                  questionId: 2,
                  question: "Câu hỏi 2",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 2",
                      B: "Câu trả lời B cho câu hỏi 2",
                      C: "Câu trả lời C cho câu hỏi 2",
                      D: "Câu trả lời D cho câu hỏi 2"
                  },
                  correctAnswer: "B"
              },
              {
                  questionId: 3,
                  question: "Câu hỏi 3",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 3",
                      B: "Câu trả lời B cho câu hỏi 3",
                      C: "Câu trả lời C cho câu hỏi 3",
                      D: "Câu trả lời D cho câu hỏi 3"
                  },
                  correctAnswer: "C"
              },
              {
                questionId: 4,
                question: "Câu hỏi 4",
                answers: {
                    A: "Câu trả lời A cho câu hỏi 4",
                    B: "Câu trả lời B cho câu hỏi 4",
                    C: "Câu trả lời C cho câu hỏi 4",
                    D: "Câu trả lời D cho câu hỏi 4"
                },
                correctAnswer: "A"
              },
              {
                  questionId: 5,
                  question: "Câu hỏi 5",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 5",
                      B: "Câu trả lời B cho câu hỏi 5",
                      C: "Câu trả lời C cho câu hỏi 5",
                      D: "Câu trả lời D cho câu hỏi 5"
                  },
                  correctAnswer: "D"
              },
              {
                  questionId: 6,
                  question: "Câu hỏi 6",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 6",
                      B: "Câu trả lời B cho câu hỏi 6",
                      C: "Câu trả lời C cho câu hỏi 6",
                      D: "Câu trả lời D cho câu hỏi 6"
                  },
                  correctAnswer: "B"
              }
            ]
          }
        )
        exams.push({
          examId: 4,
          examName: "Kiểm tra cuối kỳ môn LT Web",
          description: "Kiểm tra toàn bộ nội dung học kỳ",
          examType: "Free-access",
          openTime: null,
          questions: [
                  {
                    questionId: 1,
                    question: "Câu hỏi 1",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 1",
                        B: "Câu trả lời B cho câu hỏi 1",
                        C: "Câu trả lời C cho câu hỏi 1",
                        D: "Câu trả lời D cho câu hỏi 1"
                    },
                    correctAnswer: "C"
                },
                {
                    questionId: 2,
                    question: "Câu hỏi 2",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 2",
                        B: "Câu trả lời B cho câu hỏi 2",
                        C: "Câu trả lời C cho câu hỏi 2",
                        D: "Câu trả lời D cho câu hỏi 2"
                    },
                    correctAnswer: "D"
                },
                {
                    questionId: 3,
                    question: "Câu hỏi 3",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 3",
                        B: "Câu trả lời B cho câu hỏi 3",
                        C: "Câu trả lời C cho câu hỏi 3",
                        D: "Câu trả lời D cho câu hỏi 3"
                    },
                    correctAnswer: "A"
                },
                {
                  questionId: 4,
                  question: "Câu hỏi 4",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 4",
                      B: "Câu trả lời B cho câu hỏi 4",
                      C: "Câu trả lời C cho câu hỏi 4",
                      D: "Câu trả lời D cho câu hỏi 4"
                  },
                  correctAnswer: "B"
                },
                {
                    questionId: 5,
                    question: "Câu hỏi 5",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 5",
                        B: "Câu trả lời B cho câu hỏi 5",
                        C: "Câu trả lời C cho câu hỏi 5",
                        D: "Câu trả lời D cho câu hỏi 5"
                    },
                    correctAnswer: "C"
                },
                {
                    questionId: 6,
                    question: "Câu hỏi 6",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 6",
                        B: "Câu trả lời B cho câu hỏi 6",
                        C: "Câu trả lời C cho câu hỏi 6",
                        D: "Câu trả lời D cho câu hỏi 6"
                    },
                    correctAnswer: "D"
                },
                {
                  questionId: 7,
                  question: "Câu hỏi 7",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 7",
                      B: "Câu trả lời B cho câu hỏi 7",
                      C: "Câu trả lời C cho câu hỏi 7",
                      D: "Câu trả lời D cho câu hỏi 7"
                  },
                  correctAnswer: "A"
                },
                {
                    questionId: 8,
                    question: "Câu hỏi 8",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 8",
                        B: "Câu trả lời B cho câu hỏi 8",
                        C: "Câu trả lời C cho câu hỏi 8",
                        D: "Câu trả lời D cho câu hỏi 8"
                    },
                    correctAnswer: "B"
                },
                {
                    questionId: 9,
                    question: "Câu hỏi ",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 9",
                        B: "Câu trả lời B cho câu hỏi 9",
                        C: "Câu trả lời C cho câu hỏi 9",
                        D: "Câu trả lời D cho câu hỏi 9"
                    },
                    correctAnswer: "C"
                },
                {
                  questionId: 10,
                  question: "Câu hỏi 10",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 10",
                      B: "Câu trả lời B cho câu hỏi 10",
                      C: "Câu trả lời C cho câu hỏi 10",
                      D: "Câu trả lời D cho câu hỏi 10"
                  },
                  correctAnswer: "D"
                },
                {
                    questionId: 11,
                    question: "Câu hỏi 11",
                    answers: {
                        A: "Câu trả lời A cho câu hỏi 11",
                        B: "Câu trả lời B cho câu hỏi 11",
                        C: "Câu trả lời C cho câu hỏi 11",
                        D: "Câu trả lời D cho câu hỏi 11"
                    },
                    correctAnswer: "A"
                },
                {
                  questionId: 12,
                  question: "Câu hỏi 12",
                  answers: {
                      A: "Câu trả lời A cho câu hỏi 12",
                      B: "Câu trả lời B cho câu hỏi 12",
                      C: "Câu trả lời C cho câu hỏi 12",
                      D: "Câu trả lời D cho câu hỏi 12"
                  },
                  correctAnswer: "B"
                }
            ]
          }
        )
        localStorage.setItem("exam",JSON.stringify(exams))
    }
}
