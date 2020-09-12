# API-Endpoints-for-QUIZ-APP

###### Response Codes
    200: Success
    400: Bad request
    
###### Example Error Message

     {
        "error": "Error in finding the Category"
     }
     
     {
        "error": "Error in fetching Question"
     }
     
## REQUEST ALL CATEGORY 

  ###### Request:
    
        https://api-quiz-endpoints.herokuapp.com/api/allCategory
        GET REQUEST
   
  ###### Successful Response: 
        HTTP/1.1 200 OK
        Content-Type: application/json
        {
          "categories": [{
              "_id": "5f4a5663751a87977cda2fc3",
              "name": "JavaScript",
              "bgColor": "#FFF2CC",
              "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX33x4AAAD+5R+QghF8bw//6B/74x//6R/64R5pXw3u1x3YwxqWhxLq0xywnxXOuhm7qRfhyxtLRAlaUQvEsRi2pBbUvxo0LwZGPwhjWgyrmhVzaA6IexA2MQahkRRUTAonIwUhHgSBdRArJwU/OQgWFAOaixMdGgQMCwHHtBhuYw12aw6ikhQeGwRIQQleVAs7Poj9AAAG8UlEQVR4nO2cW3vqKhCGAxVCjdHEqq2nHtXWHv//v9uhh1U1AxliInQ/816sdWGS8gUyDMMMUUQQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGYUZJzITjX/xb/SeW7QQCSA0jMnUoKnmebzsXV5e3dw/L9o7PJkkjgbj4d8nV6XmLar26lFOlsysq89xLOQ+pK/gK0kp3xqtvkeAjd+MljLxXhaOSdGgp51DPK+2KeixMJqKSGQiVmFfo091Eg36O7Qp4vEQILtmF0o7PCuI/Tp58ShERXheIeLZCxixDmR0eF4txBIGNXkX+JbgodBTK28m9unBSKhaPAYqB6/xZdFPLMWWAxa8SnlnTYarxCldYQyFhW5R+1jINCcVFLIUv9Whu8QjmqJ5AN/X6KeIXisqZC1vc6TtEKa3dhQdeDsH+gFdb9CgsWHnT9glVoM6TL+WKxeDb548vkb3yH8tWk77X7GafhojteAT9vfEc1sArFDaxvrn5DFjIuuQTD1PNs6DBKYYFn+x4L7+53Yz+AaAZSoUpAgR+HLpmS77+/TrveOzBCK5RjUGHZXVHq4efHUey/AyO0Qg6Gnp4BKynzr99e/lichoNL+zEkgus41d3A95LiH1iF4NI3AYehuGILGUgHRmiF4gO6LAcVqmTifdm7QwsKC2vTfrvxHDVKB+GMRTNYheBl1yHMd1VgFYIxqFUwBtMCVuE1dBnb/oFhivVp4PXvW1hGBQTrl+agQjYMIW5vB70+hBWyVRDetY1j14eF6xaH/TFiFfKNSSEbJiJkjegVsOFD/GSahLFQAsHH2qw7vzfbYPsRrZBXbN5f9mVQSSb/cNi3sCvUd6UhdiReIbzM32c6CM+wuuwfVitkbDmWgU2QDgolboP06VoFpdGlD2Mojw2iFwWk0S1TYY2UyDbhaHRSaJ32D5j53q/4wa0P+QAv8WEQRjzKMWOIb/ES2TyIoLBr1pdLLzI2CqAbnTP3eP7oIPHevyfnnn0pI+ykoVl1fUuskyMs8AmYhQOQ/5E94P2bUpe0hcSvxFoKIyVG6MmfMb+9WE+hLtMwpi6U8fot1lWoE/bNoZsDVj5duPoKi3vV6xNO4sLjvHiMwuJunkE5NGUm/sbpcQp1cdAEkxl96W+cHqtQa+wi4huISqqWOF5hMXdwOa5KzXzz9iU2oTDSCV+DCidg5KsTG1KonYD82aZw6qsTG1OoNaY2jY03HUmDCrXGxDx5ZJ6GaaMKtWGFt8OZXio22nA0DSssllYTg8Klpw+xcYURNwXkPLk1zSuMuCGr35BB1TYtKIxieGrc/n8USjgeB+Zqto+zQsy2C5y4MWtXoWmE8DnUmJ5JhooHt51KoyjAWv1Nm9OF5KZYCZx0aGoMT/Xlk6rOcHxtDaBdDdNPV/gBJdXXMmld9ffggxraU8gjnaRtKB3nYBwC8rCkyH7ia9OKnES4RqqtXE0lvgsJwEJHQzkTYNhFsvNx9ewS4dfW0iJY5D8lHmCho2HnujQ58+6+ze3brI1htmjF9ZbRTubrDGiVgNc7h48pB0fHFokxnAMHZ/YfhRL7PVQOr6su2JbHeP8x29vyNdfGgcrh+poWFogiP3yX6aHEGDTr7HzXJogUzNNnz4aaCm5YXLw1nTIt1Vnpjzzl++bMdIrHrtWTxlMGnkZAZZqKDT3IXpo1pSqGt052k0FlbFqt7k7p3LJbOBzE+zugUuTGy5t1S1VpgP5wNVJfJZ9xZI4A7rbFfs7A7SaR+oyvAs5FlFleR7PlznDxwDc392e9xdwSjZ/vjafKfLZhZzPr92ebF2t+ZuMHZFS0ysrBfM8BS+pO0/FSQ30EiqcDkyDh+lE31o1HaY548SX/0Rw/w9O8y2bwnDCUHxbDM6IDyxa8bqcDnXaB1oaq9pkY37Syf8jrteoRPJqm65CYANDOHnDNA3PgmkKZIvezQdrax5em6LMN09tW6V1tgevWTvwyhWYtmE/LkRFuxx6g5PB7lLi0vGwFR18qWbco0LySMQm0DyfjssHGquUkU5kij3HUXFTVS/LUWMFmYtF6+qWyOuF79KpNuvqNt6G4O0kmtG1fdodL3FFA0nwUT5lTnb4jRfZQ1ZZ1H12yxNWs8nGfnLLqQvKR9QNa9p1KeaQYgPs5uwzHJ66ckSK9BuP3xfA8S5zLsYoF/XZh9go/Zj6q2BQX3VHvY99QXCyyVNSzdvp5203phK9hZ5Yo4a3Cu2hVrPJkm2XZaJvkUSyOO0Vd6aPYu/lklI3H42w0+Xqi9yILpZQOHKnGDgv4fJx+Yvi1+QRBEARBEARBEESQ/AdZvVUDrj2AuQAAAABJRU5ErkJggg==",
              "createdAt": "2020-08-29T13:21:39.313Z",
              "updatedAt": "2020-08-29T13:21:39.313Z",
              "__v": 0
            }
          ]
        }
           
  ###### Failed Response:
        HTTP/1.1 400
        Content-Type: application/json
        {
          error: 'Unable to fetch All Categories ...',
        }
        
        
## REQUEST GET CATEGORY BY ID 

  ###### Request:
    
        https://api-quiz-endpoints.herokuapp.com/api/category/${categoryId}
        GET REQUEST
        params : categoryId
   
  ###### Successful Response: 
        HTTP/1.1 200 OK
        Content-Type: application/json
        {
            "category": [
            {
                "_id": "5f4a5663751a87977cda2fc3",
                "name": "JavaScript",
                "bgColor": "#FFF2CC",
                "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX33x4AAAD+5R+QghF8bw//6B/74x//6R/64R5pXw3u1x3YwxqWhxLq0xywnxXOuhm7qRfhyxtLRAlaUQvEsRi2pBbUvxo0LwZGPwhjWgyrmhVzaA6IexA2MQahkRRUTAonIwUhHgSBdRArJwU/OQgWFAOaixMdGgQMCwHHtBhuYw12aw6ikhQeGwRIQQleVAs7Poj9AAAG8UlEQVR4nO2cW3vqKhCGAxVCjdHEqq2nHtXWHv//v9uhh1U1AxliInQ/816sdWGS8gUyDMMMUUQQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGYUZJzITjX/xb/SeW7QQCSA0jMnUoKnmebzsXV5e3dw/L9o7PJkkjgbj4d8nV6XmLar26lFOlsysq89xLOQ+pK/gK0kp3xqtvkeAjd+MljLxXhaOSdGgp51DPK+2KeixMJqKSGQiVmFfo091Eg36O7Qp4vEQILtmF0o7PCuI/Tp58ShERXheIeLZCxixDmR0eF4txBIGNXkX+JbgodBTK28m9unBSKhaPAYqB6/xZdFPLMWWAxa8SnlnTYarxCldYQyFhW5R+1jINCcVFLIUv9Whu8QjmqJ5AN/X6KeIXisqZC1vc6TtEKa3dhQdeDsH+gFdb9CgsWHnT9glVoM6TL+WKxeDb548vkb3yH8tWk77X7GafhojteAT9vfEc1sArFDaxvrn5DFjIuuQTD1PNs6DBKYYFn+x4L7+53Yz+AaAZSoUpAgR+HLpmS77+/TrveOzBCK5RjUGHZXVHq4efHUey/AyO0Qg6Gnp4BKynzr99e/lichoNL+zEkgus41d3A95LiH1iF4NI3AYehuGILGUgHRmiF4gO6LAcVqmTifdm7QwsKC2vTfrvxHDVKB+GMRTNYheBl1yHMd1VgFYIxqFUwBtMCVuE1dBnb/oFhivVp4PXvW1hGBQTrl+agQjYMIW5vB70+hBWyVRDetY1j14eF6xaH/TFiFfKNSSEbJiJkjegVsOFD/GSahLFQAsHH2qw7vzfbYPsRrZBXbN5f9mVQSSb/cNi3sCvUd6UhdiReIbzM32c6CM+wuuwfVitkbDmWgU2QDgolboP06VoFpdGlD2Mojw2iFwWk0S1TYY2UyDbhaHRSaJ32D5j53q/4wa0P+QAv8WEQRjzKMWOIb/ES2TyIoLBr1pdLLzI2CqAbnTP3eP7oIPHevyfnnn0pI+ykoVl1fUuskyMs8AmYhQOQ/5E94P2bUpe0hcSvxFoKIyVG6MmfMb+9WE+hLtMwpi6U8fot1lWoE/bNoZsDVj5duPoKi3vV6xNO4sLjvHiMwuJunkE5NGUm/sbpcQp1cdAEkxl96W+cHqtQa+wi4huISqqWOF5hMXdwOa5KzXzz9iU2oTDSCV+DCidg5KsTG1KonYD82aZw6qsTG1OoNaY2jY03HUmDCrXGxDx5ZJ6GaaMKtWGFt8OZXio22nA0DSssllYTg8Klpw+xcYURNwXkPLk1zSuMuCGr35BB1TYtKIxieGrc/n8USjgeB+Zqto+zQsy2C5y4MWtXoWmE8DnUmJ5JhooHt51KoyjAWv1Nm9OF5KZYCZx0aGoMT/Xlk6rOcHxtDaBdDdNPV/gBJdXXMmld9ffggxraU8gjnaRtKB3nYBwC8rCkyH7ia9OKnES4RqqtXE0lvgsJwEJHQzkTYNhFsvNx9ewS4dfW0iJY5D8lHmCho2HnujQ58+6+ze3brI1htmjF9ZbRTubrDGiVgNc7h48pB0fHFokxnAMHZ/YfhRL7PVQOr6su2JbHeP8x29vyNdfGgcrh+poWFogiP3yX6aHEGDTr7HzXJogUzNNnz4aaCm5YXLw1nTIt1Vnpjzzl++bMdIrHrtWTxlMGnkZAZZqKDT3IXpo1pSqGt052k0FlbFqt7k7p3LJbOBzE+zugUuTGy5t1S1VpgP5wNVJfJZ9xZI4A7rbFfs7A7SaR+oyvAs5FlFleR7PlznDxwDc392e9xdwSjZ/vjafKfLZhZzPr92ebF2t+ZuMHZFS0ysrBfM8BS+pO0/FSQ30EiqcDkyDh+lE31o1HaY548SX/0Rw/w9O8y2bwnDCUHxbDM6IDyxa8bqcDnXaB1oaq9pkY37Syf8jrteoRPJqm65CYANDOHnDNA3PgmkKZIvezQdrax5em6LMN09tW6V1tgevWTvwyhWYtmE/LkRFuxx6g5PB7lLi0vGwFR18qWbco0LySMQm0DyfjssHGquUkU5kij3HUXFTVS/LUWMFmYtF6+qWyOuF79KpNuvqNt6G4O0kmtG1fdodL3FFA0nwUT5lTnb4jRfZQ1ZZ1H12yxNWs8nGfnLLqQvKR9QNa9p1KeaQYgPs5uwzHJ66ckSK9BuP3xfA8S5zLsYoF/XZh9go/Zj6q2BQX3VHvY99QXCyyVNSzdvp5203phK9hZ5Yo4a3Cu2hVrPJkm2XZaJvkUSyOO0Vd6aPYu/lklI3H42w0+Xqi9yILpZQOHKnGDgv4fJx+Yvi1+QRBEARBEARBEESQ/AdZvVUDrj2AuQAAAABJRU5ErkJggg==",
                "createdAt": "2020-08-29T13:21:39.313Z",
                "updatedAt": "2020-08-29T13:21:39.313Z",
                "__v": 0
            }
          ]
        }
           
  ###### Failed Response:
        HTTP/1.1 400
        Content-Type: application/json
        {
            "error": "Error in finding the Cateogry"
        }
       

## REQUEST ADD CATEGORY 

  ###### Request:
    
        https://api-quiz-endpoints.herokuapp.com/api/addCategory
        POST REQUEST
        Accept: application/json
        Content-Type: application/json
        body : 
        {
          "name": "Type Script",
          "bgColor": "#89A9C8",
          "logo": "img URL"
        }
   
  ###### Successful Response: 
        HTTP/1.1 200 OK
        Content-Type: application/json
        {
            "message": "Type Script Added to Category"
        }
           
  ###### Failed Response:
        HTTP/1.1 400
        Content-Type: application/json
        {
          error: 'error: 'Error in adding Category',
        }
       
## REQUEST GET QUESTION BY CATEGORY 

  ###### Request:
    
        https://api-quiz-endpoints.herokuapp.com/api/get/${category._id}
        GET REQUEST
        PARAMS : category._id 
   
  ###### Successful Response: 
        HTTP/1.1 200 OK
        Content-Type: application/json
        {
            "questions": [{
                "options": [
                    "Memory address of allocated memory of object",
                    "NULL",
                    "Garbage",
                    "Any arbitrary pointer"
                ],
                "_id": "5f551776c21a520017447792",
                "category": "5f4a5699751a87977cda2fc4",
                "question": "What is the stored in the object obj in following lines of Java code?",
                "code": "box obj;",
                "ans": 2,
                "explaination": "Explanation: Memory is allocated to an object using new operator. box obj; just declares a reference to object, no memory is allocated to it hence it points to NULL.",
                "createdAt": "2020-09-06T17:08:07.000Z",
                "updatedAt": "2020-09-06T17:08:07.000Z",
                "__v": 0
            }]
        }

           
  ###### Failed Response:
        HTTP/1.1 400
        Content-Type: application/json
        {
            "error": "Error in finding the Category"
        }
       


## REQUEST ADD QUESTION BY CATEGORY 

  ###### Request:
    
        https://api-quiz-endpoints.herokuapp.com/api/add/${category._id}
        POST REQUEST
        Accept: application/json
        Content-Type: application/json
        PARAMS : category._id 
        body : 
        {
            "category" : category._id ,
            "question":"What is Node.JS?",
            "code" : "If any code exists",
            "options" : ["option 01 ","option 02", "option 03","option 04"] ,
            "ans" : 1 , (ans => 1 <= 4)
            "explaination" :"Explaination for the result "
        }
   
  ###### Successful Response: 
        HTTP/1.1 200 OK
        Content-Type: application/json
        {
            "message": "Question Added Successfully"
        }

           
  ###### Failed Response:
        HTTP/1.1 400
        Content-Type: application/json
        {
            "error": "Error in finding the Category"
        }
       

       
