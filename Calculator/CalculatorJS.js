$(document).ready(function() {
    //block custom field at first
    $('#OriBVD').prop("disabled", true);
    $('#NewBVD').prop("disabled", true);
    $('#Modes').change(function(){
        //set BVD form value according to mode selected
        if ($('#SpecCL').is(":checked")){
            $('#OriBVD').val("12");
            $('#NewBVD').val("0");
            $('#OriBVD').prop("disabled", true);
            $('#NewBVD').prop("disabled", true);        
        }
        else if ($('#CLSpec').is(":checked")){
            $('#OriBVD').val("0");
            $('#NewBVD').val("12");
            $('#OriBVD').prop("disabled", true);
            $('#NewBVD').prop("disabled", true);            
        }
        else if($('#Custom').is(":checked")) {
            $('#OriBVD').prop("disabled", false);
            $('#NewBVD').prop("disabled", false);
        }
        Calculate();
    })
    $('#OriginalRx').change(Calculate);
    function Calculate(){
        //set variable for BVD
        let oriBVD = $('#OriBVD').val();
        let newBVD = $('#NewBVD').val();
        //declare variable for R & L meridians
        let rMeridian1, rMeridian2, lMeridian1, lMeridian2;
        //calculate R new Rx
        let oriRSph = parseFloat($('#OriRSph').val());
        let oriRCyl = parseFloat($('#OriRCyl').val());
        rMeridian1 = oriRSph/(1-(oriBVD-newBVD)/1000*oriRSph);
        rMeridian2 = (oriRSph+oriRCyl)/(1-(oriBVD-newBVD)/1000*(oriRSph+oriRCyl));
        $('#NewRSph').val(rMeridian1.toFixed(2));
        if($('#OriRCyl').val()==""||$('#OriRAxis').val()=="") {
            $('#NewRCyl').val("");
            $('#NewRAxis').val("");
        } else {
            $('#NewRCyl').val((rMeridian2-rMeridian1).toFixed(2));
            $('#NewRAxis').val($('#OriRAxis').val());
        }
        //Calculate L new Rx
        let oriLSph = parseFloat($('#OriLSph').val());
        let oriLCyl = parseFloat($('#OriLCyl').val());
        lMeridian1 = oriLSph/(1-(oriBVD-newBVD)/1000*oriLSph);
        lMeridian2 = (oriLSph+oriLCyl)/(1-(oriBVD-newBVD)/1000*(oriLSph+oriLCyl));
        $('#NewLSph').val(lMeridian1.toFixed(2));
        if($('#OriLCyl').val()==""||$('#OriLAxis').val()=="") {
            $('#NewLCyl').val("");
            $('#NewLAxis').val("");
        } else {
            $('#NewLCyl').val((lMeridian2-lMeridian1).toFixed(2));
            $('#NewLAxis').val($('#OriLAxis').val());
        }
        //prevent showing NaN in new Rx box
        if($('#OriRSph').val()==""){
            $('#NewRSph').val("");
        }
        if($('#OriLSph').val()==""){
            $('#NewLSph').val("");
        }
    }
    //The following is a failed attempt in removing NaN in the new Rx fields
    // function RemoveNan(field){
    //     let temp = parseInt(field);
    //     let newfield = (isNaN(temp) ? 0:temp);
    //     field = newfield;
    // }
    // RemoveNan($('NewRSph').val());
    // _amount: function(e) {
    //     var value = parseInt(e.target.value);
    //     var newValue = (isNaN(value) ? 0 : value);
      
    //     //OR sorthand as `NaN` is falsey
    //     var value = parseInt(e.target.value) || 0;
    //   }
    //isNaN(parseInt($('#NewRSph').val())) ? 0:$('#NewRSph').val();// isNaN()
})

