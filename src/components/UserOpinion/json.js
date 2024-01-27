export const json = {
    "title": "Expert Feedback",
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
             "type": "boolean",
             "name": "1. Countdown",
             "visibleIf": "{expert-findings} = true",

            },
            {
                "type": "boolean",
                "name": "2. Scarcity",
                "visibleIf": "{expert-findings} = true",
   
               },
               {
                "type": "boolean",
                "name": "3. Forced Countinuty",
                "visibleIf": "{expert-findings} = true",
   
               },
               {
                "type": "boolean",
                "name": "4. Social proof",
                "visibleIf": "{expert-findings} = true",
   
               }
           ],
         },

         {
          "type": "panel",
          "name": "expert opinion",
          "elements": [

           {
            "type": "panel",
            "name": "children",
            "elements": [
             {
              "type": "text",
              "name": "have-children",
              "title": "Please Write Your valuable opinion or Suggestion?"
             },
            ]
           }
          ],
          "startWithNewLine": false
         }
        ]
       }
      ],
      "title": "Social History"
     },
    ],
    "showQuestionNumbers": "off"
   };