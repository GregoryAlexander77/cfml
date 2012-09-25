var gdata = {
"graphset":[
    {
        "type":"area",
        "stacked":true,
        "background-color":"#ffffff",
        "scale-x":{
            "line-color":"#ffffff",
            "values":["Jan","Feb","Mar","Apr","May","Jun"],
            "guide":{
                "visible":false
            },
            "tick":{
                "visible":false
            },
            "item":{
                "font-family":"helvetica",
                "font-color":"#05636c",
                "font-weight":"bold",
                "font-size":"12px",
                "visible":true,
                "offset-y":"8px"
            }
        },
        "scale-y":{
            "max-labels":"6",
            "line-width":"0px",
            "format":"%v",
            "tick":{
                "visible":false
            },
            "item":{
                "font-family":"helvetica",
                "font-color":"#05636c",
                "font-weight":"bold",
                "font-size":"12px",
                "visible":true,
                "offset-x":"-8px"
            },
            "guide":{
                "visible":false
            }
        },
        "crosshair-x":{
            "line-color":"#ffffff",
            "marker":{
                "visible":false
            },
            "value-label":{
                "shadow":0,
                "font-size":"12px",
                "font-color":"#05636c",
                "border-color":"#9bc1c4",
                "background-color":"#ffffff",
                "text-align":"center",
                "border-width":"2px"
            },
            "scale-label":{
                "visible":false
            }
        },
        "tooltip":{
            "visible":false
        },
        "plot":{
            "shadow-alpha":0,
            "line-style":"solid",
            "line-width":"2px",
            "tooltip-text":" %v  %t",
            "alpha-area":0.4,
            "alpha":1,
            "marker":{
                "visible":false
            }
        },
        "series":[
            {
                "values":[45,40,43,39,33,35,47],
                "text":"Shoes",
                "line-color":"#9bc1c4",
                "background-color":"#9bc1c4"
            },
            {
                "values":[40,32,37,30,28,31,36],
                "text":"Pants",
                "line-color":"#69a1a7",
                "background-color":"#69a1a7"
            },
            {
                "values":[37,24,26,20,23,22,20],
                "text":"Accessories",
                "line-color":"#378289",
                "background-color":"#378289"
            },
            {
                "values":[20,15,14,9,10,16,8],
                "text":"Bags",
                "line-color":"#05636c",
                "background-color":"#05636c"
            }
        ]
    }
]
}