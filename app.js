$( document ).ready(AppLoaded)


function AppLoaded() {
    console.log('App is Loaded and Ready');
    apply_event_handlers();
}

let shipping_time = 5;
let shipping_cost = 0;

/********************
* will add event handlers to all of the appropriate elements
*@params: none
*@return: none
********************/
function apply_event_handlers(){
    console.log('apply_event_handlers Triggered');

    // $(".checkboxes input").click(function() {
    // // console.log('.checkboxes input called.');
    // })
    $("#calcBtn").click(function() {
        console.log('calcBtn called.');
        calculate_shipping($("#weightInput").val(), shipping_time)
        $("#weightInput").val('');
        
    })
}


/********************
* checks the incoming values. If anything other than a number or period is pressed, it returns false.
*@params: event {object} the object that holds the details of the event
*@return: true if the key pressed is a number or the period key, false if it is not
********************/

function validate_keydown(evt, obj) {
    // let inputValue = $("#weightInput").val();
    // console.log('let = ' + inputValue);
    let charCode = (evt.which) ? evt.which : event.keyCode
    let value = obj.value;
    let dotcontains = value.indexOf(".") != -1;
    if (dotcontains)
    if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    return true;
}

/********************
* update the stored value for the shipping based on the clicked radio button.
*@global: shipping_time
@params: none
*@return: none
********************/
function change_shipping_type(time){

    var currentDate = new Date();
    var numberOfDaysToAdd = time;
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 

    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var y = currentDate.getFullYear();

    var arrival_date = dd + '/'+ mm + '/'+ y;
    console.log('someFormattedDate = ' + arrival_date);

}

/********************
* process the shipping time and weight, and return an object with the shipping time and weight
*@params: weight, shipping_time
*@return: an object with the following properties and values: arrival_date, weight and cost.
********************/
function calculate_shipping(weight, shipping_time){
    let arrival_date = '';
    console.log('calculate_shipping Triggered');

    let weightOz = weight * 16;

    if(weightOz <= 20){
        shipping_cost = (weightOz * 0.02).toFixed(2);
    } else if(weightOz > 20 && weightOz < 32){
        shipping_cost = (weightOz * 0.10).toFixed(2);
    } else if(weightOz >= 32){
        shipping_cost = (weightOz * 0.20).toFixed(2);
    }

    if(shipping_time === 5){
        shipping_cost = shipping_cost * 1;
    } else if(shipping_time === 3){
        shipping_cost = shipping_cost * 1.5;
    } else if(shipping_time === 2){
        shipping_cost = shipping_cost * 2;
    }
    console.log("shipping Cost = " + shipping_cost)
    change_shipping_type(shipping_time);
    
}