$( document ).ready(AppLoaded)


function AppLoaded() {
    console.log('App is Loaded and Ready');
    apply_event_handlers();
}

const shipping_time = 5;

/********************
* will add event handlers to all of the appropriate elements
*@params: none
*@return: none
********************/
function apply_event_handlers(){
    console.log('apply_event_handlers Triggered');
    $("#weightInput").keydown(function() {
        console.log( "Handler for .keydown() called." );
      })
    $(".checkboxes input").click(function() {
    console.log('.checkboxes input called.');
    })
    $("#calcBtn").click(function() {
        console.log('calcBtn called.');
        })
}


/********************
* checks the incoming values. If anything other than a number or period is pressed, it returns false.
*@params: event {object} the object that holds the details of the event
*@return: true if the key pressed is a number or the period key, false if it is not
********************/
function validate_keydown(){
    console.log('validate_keydown Triggered');

}

/********************
* update the stored value for the shipping based on the clicked radio button.
*@global: shipping_time
@params: none
*@return: none
********************/
function change_shipping_type(){
    console.log('change_shipping_type Triggered');

}

/********************
* process the shipping time and weight, and return an object with the shipping time and weight
*@params: weight, shipping_time
*@return: an object with the following properties and values: arrival_date, weight and cost.
********************/
function calculate_shipping(){
    console.log('calculate_shipping Triggered');

}