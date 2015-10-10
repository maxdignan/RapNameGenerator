

/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

    this.getName = function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    this.getWrapName = function(name) {
        var randValue = Math.round(Math.random());
        if (randValue == 0) { //name is first name
            var lastName = this.getName(this.last_names);
            return name + " " + lastName;
        } else { //name entered is last name
            var firstName = this.getName(this.first_names);
            return firstName + " " + name;
        }
    };

}


//Add your codez here


$(document).ready(function() {

    var engine = new Generator();

    $('#enter').on('click', function(e) {
        var name = $('#user-input').val();


        $("#err").hide();
        $("#res").hide();

        if (name.length == 0) {
            $("#err").show();
            //$("#err").html(engine.getValue(name));
        } else {
            $("#res").show();
            $("#res").html(engine.getWrapName(name));
        }


    });


});
