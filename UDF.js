console.log("Hello")
function transform(line) {
    var values = line.split(',');

    var obj = new Object();

    obj.State_FIPS_Code = values[0];
    obj.County_FIPS_Code = values[1];
    obj.CHSI_County_Name = values[2];
    obj.CHSI_State_Name = values[3];
    obj.CHSI_State_Abbr = values[4];
    obj.Strata_ID_Number = values[5];
    obj.Strata_Determining_Factors = values[6];
    obj.Number_Counties = values[7];
    obj.Population_Size = values[8];
    obj.Min_Population_Size = values[9];
    obj.Max_Population_Size = values[10];
    obj.Population_Density = values[11];
    obj.Min_Population_Density = values[12];
    obj.Max_Population_Density = values[13];
    obj.Poverty = values[14];
    obj.Min_Poverty = values[15];
    obj.Max_Poverty = values[16];
    obj.Age_19_Under = values = [17];
    obj.Min_Age_19_Under = values[18];
    obj.Max_Age_19_Under = values[19];
    obj.Age_19_64 = values[20];
    obj.Min_Age_19_64 = values[21];
    obj.Max_Age_19_65 = values[22];
    obj.Age_65_84 = values[23];
    obj.Min_Age_65_84 = values[24];
    obj.Max_Age_65_85 = values[25];
    obj.Age_85_and_Over = values[26];
    obj.Min_Age_85_and_Over = values[27];
    obj.Max_Age_85_and_Over = values[28];
    obj.White = values[29];
    obj.Min_White = values[30];
    obj.Max_White = values[31];
    obj.Black = values[32];
    obj.Min_Black = values[33];
    obj.Max_Black = values[34];
    obj.Native_American = values[35];
    obj.Min_Native_American = values[36];
    obj.Max_Native_American = values[37];
    obj.Asian = values[38];
    obj.Min_Asian = values[39];
    obj.Max_Asian = values[40];
    obj.Hispanic = values[41];
    obj.Min_Hispanic = values[42];
    obj.Max_Hispanic = values[43];

    var jsonString = JSON.stringify(obj);

    console.log(jsonString);
    
    return jsonString;
}

