$(document).ready(function() {
    $('#OriBVD').prop("disabled", true);
    $('#NewBVD').prop("disabled", true);
    $('#Modes').change(function(){
        //enable the custom field if custom mode is checked
        if($('#Custom').is(":checked")) {
            $('#OriBVD').prop("disabled", false);
            $('#NewBVD').prop("disabled", false);
        }
    })
    $('#OriginalRx').change(function(){
        //setting variable for BVD
        let oriBVD = $('#OriBVD').val();
        let newBVD = $('#NewBVD').val();
        //setting variable for R & L meridians
        let rMeridian1;
        let rMeridian2;
        let lMeridian1;
        let lMeridian2;
        if(!(oriBVD&&newBVD)){ //if the custom BVD is empty, default 12 mm to 0 mm
            oriBVD = 12;
            newBVD = 0;
        }
        //calculate R new Rx
        let oriRSph = parseFloat($('#OriRSph').val());
        let oriRCyl = parseFloat($('#OriRCyl').val());
        rMeridian1 = oriRSph/(1-Math.abs((oriBVD-newBVD)/1000)*oriRSph);
        rMeridian2 = (oriRSph+oriRCyl)/(1-Math.abs((oriBVD-newBVD)/1000)*(oriRSph+oriRCyl));
        $('#NewRSph').val(rMeridian1.toFixed(2));
        $('#NewRCyl').val((rMeridian2-rMeridian1).toFixed(2));
        $('#NewRAxis').val($('#OriRAxis').val());
        //Calculate L new Rx
        let oriLSph = parseFloat($('#OriLSph').val());
        let oriLCyl = parseFloat($('#OriLCyl').val());
        lMeridian1 = oriLSph/(1-Math.abs((oriBVD-newBVD)/1000)*oriLSph);
        lMeridian2 = (oriLSph+oriLCyl)/(1-Math.abs((oriBVD-newBVD)/1000)*(oriLSph+oriLCyl));
        $('#NewLSph').val(lMeridian1.toFixed(2));
        $('#NewLCyl').val((lMeridian2-lMeridian1).toFixed(2));
        $('#NewLAxis').val($('#OriLAxis').val());

    })
})
