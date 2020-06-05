# apply-style-json-defined

#### This function applies styles dynamically with auto merge 

### Call function with styles passed as a Json CamelCase defined.
> You can pass all the existent html style definition, just transform them as CamelCase

### Examples :
- background-color: red; ====> "backgroundColor": "red"
- font-size: 10px; ====> "fontSize": "10px"
- text-shadow: 3px 3px 1px black; => "textShadow": "3px 3px 1px black"
- background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url("../../media/examples/lizard.png");   ====> "backgroundImage": "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('../../media/examples/lizard.png')"

> ONLY the property name must be modified in camelCase, not the value

```
applyStyles({
  "myclass" : {
    "color" : "rgb(254, 254, 254)",
    "fontSize": "12px"
},
  "myotherclass" : {
    "backgroundColor" : "rgb(56, 60, 66)",
    "borderColor" : "rgba(0, 0, 0, 0.51)"
 }
})
```
All tags with these classes (myclass & myotherclass) will be impacted.
