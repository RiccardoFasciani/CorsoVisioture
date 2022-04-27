from fastapi import FastAPI

app= FastAPI()

# @app.get("/")
# def home():
#     return {"Data":"Testing"}
    
# @app.get("/about")
# def about():
#     return{"Data":"About"}    
inventory={
        1:{
            "name":"Milk",
            "price":3.99,
            "brand":"Cigno"
        }
}
@app.get("/get-item/{item_id}")
def get_item(item_id:int):
    return inventory[item_id]