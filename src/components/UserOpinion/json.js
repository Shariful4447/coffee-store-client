export const json = {
    "title": "Expert feedback",
    "logoPosition": "right",
    "pages": [
     {
      "name": "Social history",
      "elements": [
       {
        "type": "panel",
        "name": "social-history",
        "elements": [
         {
          "type": "panel",
          "name": "Automatic Detection result",
          "elements": [
           {
            "type": "text",
            "name": "Request Details",
            "title": "Request Details",
            // "choices": [
            //  {
            //   "value": "never",
            //   "text": "Never"
            //  },
            //  {
            //   "value": "yes",
            //   "text": "Yes"
            //  },
            //  {
            //   "value": "quit",
            //   "text": "Quit"
            //  }
            // ]
           },
        //    {
        //     "type": "text",
        //     "name": "packs-a-day",
        //     "visibleIf": "{cigarettes} = 'yes'",
        //     "title": "How many packs a day?",
        //     "inputType": "number",
        //     "min": 0
        //    },
           {
            "type": "panel",
            "name": "smoking-history",
            "elements": [
             {
              "type": "text",
              "name": "date-quit",
              "title": "Date quit",
              "titleLocation": "left",
              "inputType": "date",
              "maxValueExpression": "today()"
             },
             {
              "type": "text",
              "name": "years-smoked",
              "title": "Years smoked",
              "titleLocation": "left",
              "inputType": "number",
              "min": 0
             }
            ],
            "visibleIf": "{cigarettes} = 'quit'"
           },
          ]
         },
         {
          "type": "panel",
          "name": "Automatic Detection result",
          "elements": [
           {
            "type": "boolean",
            "name": "alcohol",
            "title": "Our Automated Findings"
           },
           {
            "type": "text",
            "name": "drinks-per-week",
            "visibleIf": "{alcohol} = true",
            "title": "How many drinks per week?"
           }
          ],
          "startWithNewLine": false
         },
         {
          "type": "panel",
          "name": "expert-findings",
          "elements": [
            {
             "type": "boolean",
             "name": "expert-findings",
             "title": "Is Dark Pattern Present in the Given link ?"
            },
            {
             "type": "text",
             "name": "number-of-patterns",
             "visibleIf": "{expert-findings} = true",
             "title": "How many?"
            }
           ],
         },
         {
          "type": "panel",
          "name": "personal-info",
          "elements": [
           {
            "type": "dropdown",
            "name": "education",
            "title": "What is your highest level of education completed?",
            "choices": [
             {
              "value": "high-school",
              "text": "High School"
             },
             {
              "value": "trade-school",
              "text": "Trade School"
             },
             {
              "value": "college",
              "text": "College"
             },
             {
              "value": "post-graduate",
              "text": "Post-graduate degree(s)"
             }
            ]
           },
           {
            "type": "dropdown",
            "name": "marital-status",
            "title": "What is your marital status?",
            "choices": [
             {
              "value": "married",
              "text": "Married"
             },
             {
              "value": "partnership",
              "text": "Partnership"
             },
             {
              "value": "divorced",
              "text": "Divorced"
             },
             {
              "value": "separated",
              "text": "Separated"
             },
             {
              "value": "single",
              "text": "Single"
             },
             {
              "value": "widow",
              "text": "Widow(er)"
             }
            ]
           },

          ]
         },
         {
          "type": "panel",
          "name": "employment-exercises-children",
          "elements": [
           {
            "type": "radiogroup",
            "name": "employment",
            "title": "Are you employed?",
            "showCommentArea": true,
            "commentText": "Type of work",
            "choices": [
             {
              "value": "yes",
              "text": "Yes"
             },
             {
              "value": "no",
              "text": "No"
             },
             {
              "value": "retired",
              "text": "Retired"
             }
            ],
            "colCount": 3
           },

           {
            "type": "panel",
            "name": "children",
            "elements": [
             {
              "type": "boolean",
              "name": "have-children",
              "title": "Do you have children?"
             },
             {
              "type": "multipletext",
              "name": "children-ages",
              "visibleIf": "{have-children} = true",
              "titleLocation": "hidden",
              "items": [
               {
                "name": "children-number",
                "title": "# of children"
               },
               {
                "name": "ages",
                "title": "Their ages"
               }
              ]
             }
            ]
           }
          ],
          "startWithNewLine": false
         }
        ]
       }
      ],
      "title": "Social history"
     },
    ],
    "showQuestionNumbers": "off"
   };