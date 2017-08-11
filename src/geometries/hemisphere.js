
function Hemisphere( ) {

  this.vertices = [  -0.5556,-0.8315,0,-0.3753,-0.9239,0.0747,-0.3827,-0.9239,0,-0.9239,0.3827,0,-0.9619,0.1951,0.1913,-0.9808,0.1951,0,-0.1913,-0.9808,0.0381,-0.1951,-0.9808,0,-0.9808,0,0.1951,-1,0,0,-0.1951,0.9808,0,0,1,0,-0.1913,0.9808,0.0381,0,-1,0,-0.9619,-0.1951,0.1913,-0.9808,-0.1951,0,-0.3753,0.9239,0.0747,-0.3827,0.9239,0,-0.9239,-0.3827,0,-0.9061,-0.3827,0.1802,-0.5556,0.8315,0,-0.5449,0.8315,0.1084,-0.8155,-0.5556,0.1622,-0.8315,-0.5556,0,-0.6935,0.7071,0.1379,-0.7071,0.7071,0,-0.7071,-0.7071,0,-0.6935,-0.7071,0.1379,-0.8155,0.5556,0.1622,-0.8315,0.5556,0,-0.5449,-0.8315,0.1084,-0.9061,0.3827,0.1802,-0.5133,-0.8315,0.2126,-0.8536,0.3827,0.3536,-0.3536,-0.9239,0.1464,-0.9061,0.1951,0.3753,-0.1802,-0.9808,0.0747,-0.9239,0,0.3827,-0.1802,0.9808,0.0747,-0.9061,-0.1951,0.3753,-0.3536,0.9239,0.1464,-0.8536,-0.3827,0.3536,-0.5133,0.8315,0.2126,-0.7682,-0.5556,0.3182,-0.6533,0.7071,0.2706,-0.6533,-0.7071,0.2706,-0.7682,0.5556,0.3182,-0.3182,0.9239,0.2126,-0.7682,-0.3827,0.5133,-0.4619,0.8315,0.3087,-0.6913,-0.5556,0.4619,-0.5879,0.7071,0.3928,-0.5879,-0.7071,0.3928,-0.6913,0.5556,0.4619,-0.4619,-0.8315,0.3087,-0.7682,0.3827,0.5133,-0.3182,-0.9239,0.2126,-0.8155,0.1951,0.5449,-0.1622,-0.9808,0.1084,-0.8315,0,0.5556,-0.1622,0.9808,0.1084,-0.8155,-0.1951,0.5449,-0.6533,0.3827,0.6533,-0.2706,-0.9239,0.2706,-0.6935,0.1951,0.6935,-0.1379,-0.9808,0.1379,-0.7071,0,0.7071,-0.1379,0.9808,0.1379,-0.6935,-0.1951,0.6935,-0.2706,0.9239,0.2706,-0.6533,-0.3827,0.6533,-0.3928,0.8315,0.3928,-0.5879,-0.5556,0.5879,-0.5,0.7071,0.5,-0.5,-0.7071,0.5,-0.5879,0.5556,0.5879,-0.3928,-0.8315,0.3928,-0.5133,-0.3827,0.7682,-0.3087,0.8315,0.4619,-0.4619,-0.5556,0.6913,-0.3928,0.7071,0.5879,-0.3928,-0.7071,0.5879,-0.4619,0.5556,0.6913,-0.3087,-0.8315,0.4619,-0.5133,0.3827,0.7682,-0.2126,-0.9239,0.3182,-0.5449,0.1951,0.8155,-0.1084,-0.9808,0.1622,-0.5556,0,0.8315,-0.1084,0.9808,0.1622,-0.5449,-0.1951,0.8155,-0.2126,0.9239,0.3182,-0.2126,-0.8315,0.5133,-0.1464,-0.9239,0.3536,-0.3536,0.3827,0.8536,-0.3753,0.1951,0.9061,-0.0747,-0.9808,0.1802,-0.3827,0,0.9239,-0.0747,0.9808,0.1802,-0.3753,-0.1951,0.9061,-0.1464,0.9239,0.3536,-0.3536,-0.3827,0.8536,-0.2126,0.8315,0.5133,-0.3182,-0.5556,0.7682,-0.2706,0.7071,0.6533,-0.2706,-0.7071,0.6533,-0.3182,0.5556,0.7682,-0.1802,-0.3827,0.9061,-0.1622,-0.5556,0.8155,-0.1084,0.8315,0.5449,-0.1379,0.7071,0.6935,-0.1379,-0.7071,0.6935,-0.1622,0.5556,0.8155,-0.1084,-0.8315,0.5449,-0.1802,0.3827,0.9061,-0.0747,-0.9239,0.3753,-0.1913,0.1951,0.9619,-0.0381,-0.9808,0.1913,-0.1951,0,0.9808,-0.0381,0.9808,0.1913,-0.1913,-0.1951,0.9619,-0.0747,0.9239,0.3753,0,-0.9239,0.3827,0,-0.9808,0.1951,0,0,1,0,0.9808,0.1951,0,-0.1951,0.9808,0,0.9239,0.3827,0,-0.3827,0.9239,0,0.8315,0.5556,0,-0.5556,0.8315,0,0.7071,0.7071,0,-0.7071,0.7071,0,0.5556,0.8315,0,-0.8315,0.5556,0,0.3827,0.9239,0,0.1951,0.9808,0.138,0.7071,0.6935,0.138,-0.7071,0.6935,0.1622,0.5556,0.8155,0.1084,-0.8315,0.5449,0.1802,0.3827,0.9061,0.0747,-0.9239,0.3753,0.1913,0.1951,0.9619,0.0381,-0.9808,0.1913,0.1951,0,0.9808,0.0381,0.9808,0.1913,0.1913,-0.1951,0.9619,0.0747,0.9239,0.3753,0.1802,-0.3827,0.9061,0.1084,0.8315,0.5449,0.1622,-0.5556,0.8155,0.3827,0,0.9239,0.0747,0.9808,0.1802,0.0747,-0.9808,0.1802,0.3753,-0.1951,0.9061,0.1464,0.9239,0.3536,0.3536,-0.3827,0.8536,0.2126,0.8315,0.5133,0.3182,-0.5556,0.7682,0.2706,0.7071,0.6533,0.2706,-0.7071,0.6533,0.3182,0.5556,0.7682,0.2126,-0.8315,0.5133,0.3536,0.3827,0.8536,0.1464,-0.9239,0.3536,0.3753,0.1951,0.9061,0.3928,-0.7071,0.5879,0.3928,0.7071,0.5879,0.4619,0.5556,0.6913,0.3087,-0.8315,0.4619,0.5133,0.3827,0.7682,0.2126,-0.9239,0.3182,0.5449,0.1951,0.8155,0.1084,-0.9808,0.1622,0.5556,0,0.8315,0.1084,0.9808,0.1622,0.5449,-0.1951,0.8155,0.2126,0.9239,0.3182,0.5133,-0.3827,0.7682,0.3087,0.8315,0.4619,0.4619,-0.5556,0.6913,0.138,0.9808,0.1379,0.138,-0.9808,0.1379,0.6935,-0.1951,0.6935,0.2706,0.9239,0.2706,0.6533,-0.3827,0.6533,0.3928,0.8315,0.3928,0.5879,-0.5556,0.5879,0.5,0.7071,0.5,0.5,-0.7071,0.5,0.5879,0.5556,0.5879,0.3928,-0.8315,0.3928,0.6533,0.3827,0.6533,0.2706,-0.9239,0.2706,0.6935,0.1951,0.6935,0.7071,0,0.7071,0.5879,0.7071,0.3928,0.6913,0.5556,0.4619,0.5879,-0.7071,0.3928,0.4619,-0.8315,0.3087,0.7682,0.3827,0.5133,0.3182,-0.9239,0.2126,0.8155,0.1951,0.5449,0.1622,-0.9808,0.1084,0.8315,0,0.5556,0.1622,0.9808,0.1084,0.8155,-0.1951,0.5449,0.3182,0.9239,0.2126,0.7682,-0.3827,0.5133,0.4619,0.8315,0.3087,0.6913,-0.5556,0.4619,0.9061,-0.1951,0.3753,0.3536,0.9239,0.1464,0.8536,-0.3827,0.3536,0.5133,0.8315,0.2126,0.7682,-0.5556,0.3182,0.6533,0.7071,0.2706,0.6533,-0.7071,0.2706,0.7682,0.5556,0.3182,0.5133,-0.8315,0.2126,0.8536,0.3827,0.3536,0.3536,-0.9239,0.1464,0.9061,0.1951,0.3753,0.1802,-0.9808,0.0747,0.9239,0,0.3827,0.1802,0.9808,0.0747,0.5449,-0.8315,0.1084,0.9061,0.3827,0.1802,0.3753,-0.9239,0.0747,0.9619,0.1951,0.1913,0.1913,-0.9808,0.0381,0.9808,0,0.1951,0.1913,0.9808,0.0381,0.9619,-0.1951,0.1913,0.3753,0.9239,0.0747,0.9061,-0.3827,0.1802,0.5449,0.8315,0.1084,0.8155,-0.5556,0.1622,0.6935,0.7071,0.1379,0.6935,-0.7071,0.1379,0.8155,0.5556,0.1622,0.9239,-0.3827,0,0.3827,0.9239,0,0.5556,0.8315,0,0.8315,-0.5556,0,0.7071,0.7071,0,0.7071,-0.7071,0,0.8315,0.5556,0,0.5556,-0.8315,0,0.9239,0.3827,0,0.3827,-0.9239,0,0.9808,0.1951,0,0.1951,-0.9808,0,1,0,0,0.1951,0.9808,0,0.9808,-0.1951,0
                  ];
  this.indices = [  0,1,2,3,4,5,2,6,7,5,8,9,10,11,12,13,7,6,9,14,15,10,16,17,18,14,19,20,16,21,18,22,23,20,24,25,26,22,27,25,28,29,26,30,0,29,31,3,27,32,30,28,33,31,30,34,1,31,35,4,1,36,6,4,37,8,12,11,38,13,6,36,14,37,39,12,40,16,19,39,41,16,42,21,19,43,22,21,44,24,27,43,45,24,46,28,38,47,40,39,48,41,40,49,42,43,48,50,42,51,44,45,50,52,44,53,46,45,54,32,46,55,33,32,56,34,35,55,57,34,58,36,35,59,37,38,11,60,13,36,58,37,61,39,53,62,55,54,63,56,55,64,57,56,65,58,59,64,66,60,11,67,13,58,65,59,68,61,60,69,47,61,70,48,47,71,49,50,70,72,49,73,51,50,74,52,51,75,53,52,76,54,68,77,70,69,78,71,72,77,79,71,80,73,72,81,74,75,80,82,76,81,83,75,84,62,63,83,85,62,86,64,63,87,65,66,86,88,67,11,89,13,65,87,66,90,68,67,91,69,85,92,93,86,94,95,85,96,87,86,97,88,89,11,98,13,87,96,88,99,90,89,100,91,90,101,77,91,102,78,79,101,103,78,104,80,81,103,105,82,104,106,81,92,83,82,94,84,103,107,108,104,109,110,105,108,111,104,112,106,105,113,92,106,114,94,92,115,93,95,114,116,96,115,117,95,118,97,98,11,119,13,96,117,97,120,99,98,121,100,99,107,101,100,109,102,117,122,123,116,124,118,119,11,125,13,117,123,120,124,126,119,127,121,120,128,107,121,129,109,108,128,130,109,131,110,108,132,111,110,133,112,113,132,134,112,135,114,115,134,122,116,135,136,129,137,131,130,138,132,133,137,139,134,138,140,133,141,135,134,142,122,136,141,143,123,142,144,136,145,124,125,11,146,13,123,144,124,147,126,127,146,148,126,149,128,127,150,129,130,149,151,143,152,145,146,11,153,13,144,154,145,155,147,146,156,148,147,157,149,150,156,158,151,157,159,150,160,137,151,161,138,137,162,139,138,163,140,139,164,141,142,163,165,143,164,166,142,154,144,159,167,161,162,168,169,163,167,170,162,171,164,163,172,165,166,171,173,165,174,154,166,175,152,153,11,176,13,154,174,155,175,177,153,178,156,155,179,157,156,180,158,159,179,181,158,168,160,176,11,182,13,174,183,175,184,177,176,185,178,177,186,179,178,187,180,179,188,181,180,189,168,181,190,167,168,191,169,170,190,192,169,193,171,170,194,172,173,193,195,174,194,183,173,196,175,191,197,198,192,199,200,191,201,193,192,202,194,195,201,203,183,202,204,195,205,196,182,11,206,13,183,204,184,205,207,182,208,185,184,209,186,185,210,187,188,209,211,189,210,197,188,199,190,205,212,207,206,213,208,207,214,209,210,213,215,211,214,216,210,217,197,211,218,199,197,219,198,200,218,220,198,221,201,200,222,202,203,221,223,202,224,204,203,225,205,206,11,226,13,204,224,218,227,220,219,228,221,220,229,222,223,228,230,224,229,231,223,232,225,226,11,233,13,224,231,225,234,212,226,235,213,212,236,214,213,237,215,216,236,238,215,239,217,216,240,218,217,241,219,234,242,236,237,243,244,238,242,245,239,244,246,238,247,240,239,248,241,227,247,249,241,250,228,227,251,229,230,250,252,231,251,253,230,254,232,233,11,255,13,231,253,232,256,234,233,243,235,0,30,1,3,31,4,2,1,6,5,4,8,9,8,14,10,12,16,18,15,14,20,17,16,18,19,22,20,21,24,26,23,22,25,24,28,26,27,30,29,28,31,27,45,32,28,46,33,30,32,34,31,33,35,1,34,36,4,35,37,14,8,37,12,38,40,19,14,39,16,40,42,19,41,43,21,42,44,27,22,43,24,44,46,38,60,47,39,61,48,40,47,49,43,41,48,42,49,51,45,43,50,44,51,53,45,52,54,46,53,55,32,54,56,35,33,55,34,56,58,35,57,59,37,59,61,53,75,62,54,76,63,55,62,64,56,63,65,59,57,64,59,66,68,60,67,69,61,68,70,47,69,71,50,48,70,49,71,73,50,72,74,51,73,75,52,74,76,68,90,77,69,91,78,72,70,77,71,78,80,72,79,81,75,73,80,76,74,81,75,82,84,63,76,83,62,84,86,63,85,87,66,64,86,66,88,90,67,89,91,85,83,92,86,84,94,85,93,96,86,95,97,88,97,99,89,98,100,90,99,101,91,100,102,79,77,101,78,102,104,81,79,103,82,80,104,81,105,92,82,106,94,103,101,107,104,102,109,105,103,108,104,110,112,105,111,113,106,112,114,92,113,115,95,94,114,96,93,115,95,116,118,97,118,120,98,119,121,99,120,107,100,121,109,117,115,122,116,136,124,120,118,124,119,125,127,120,126,128,121,127,129,108,107,128,109,129,131,108,130,132,110,131,133,113,111,132,112,133,135,115,113,134,116,114,135,129,150,137,130,151,138,133,131,137,134,132,138,133,139,141,134,140,142,136,135,141,123,122,142,136,143,145,124,145,147,127,125,146,126,147,149,127,148,150,130,128,149,143,166,152,145,152,155,146,153,156,147,155,157,150,148,156,151,149,157,150,158,160,151,159,161,137,160,162,138,161,163,139,162,164,142,140,163,143,141,164,142,165,154,159,181,167,162,160,168,163,161,167,162,169,171,163,170,172,166,164,171,165,172,174,166,173,175,155,152,175,153,176,178,155,177,179,156,178,180,159,157,179,158,180,168,175,196,184,176,182,185,177,184,186,178,185,187,179,186,188,180,187,189,181,188,190,168,189,191,170,167,190,169,191,193,170,192,194,173,171,193,174,172,194,173,195,196,191,189,197,192,190,199,191,198,201,192,200,202,195,193,201,183,194,202,195,203,205,184,196,205,182,206,208,184,207,209,185,208,210,188,186,209,189,187,210,188,211,199,205,225,212,206,226,213,207,212,214,210,208,213,211,209,214,210,215,217,211,216,218,197,217,219,200,199,218,198,219,221,200,220,222,203,201,221,202,222,224,203,223,225,218,240,227,219,241,228,220,227,229,223,221,228,224,222,229,223,230,232,225,232,234,226,233,235,212,234,236,213,235,237,216,214,236,215,237,239,216,238,240,217,239,241,234,256,242,237,235,243,238,236,242,239,237,244,238,245,247,239,246,248,227,240,247,241,248,250,227,249,251,230,228,250,231,229,251,230,252,254,232,254,256,233,255,243
                  ];
  this.normals = [ -0.5589,-0.8274,0.055,-0.3804,-0.9217,0.0757,-0.3876,-0.921,0.0381,-0.9209,0.3789,0.0907,-0.9622,0.1939,0.1914,-0.9764,0.193,0.0962,-0.1971,-0.9796,0.0392,-0.2009,-0.9794,0.0198,-0.9808,0,0.1951,-0.9952,0,0.098,-0.2009,0.9794,0.0198,0,0.998,0.063,-0.1971,0.9796,0.0392,0,-0.998,0.063,-0.9622,-0.1939,0.1914,-0.9764,-0.193,0.0962,-0.3804,0.9217,0.0757,-0.3876,0.921,0.0381,-0.9209,-0.3789,0.0907,-0.907,-0.3805,0.1804,-0.5589,0.8274,0.055,-0.549,0.8286,0.1092,-0.8173,-0.5528,0.1626,-0.8305,-0.5509,0.0818,-0.6965,0.704,0.1385,-0.7084,0.7023,0.0698,-0.7084,-0.7023,0.0698,-0.6965,-0.704,0.1385,-0.8173,0.5528,0.1626,-0.8305,0.5509,0.0818,-0.549,-0.8286,0.1092,-0.907,0.3805,0.1804,-0.5171,-0.8286,0.2142,-0.8544,0.3805,0.3539,-0.3583,-0.9217,0.1484,-0.9063,0.1939,0.3754,-0.1856,-0.9796,0.0769,-0.9239,0,0.3827,-0.1856,0.9796,0.0769,-0.9063,-0.1939,0.3754,-0.3583,0.9217,0.1484,-0.8544,-0.3805,0.3539,-0.5171,0.8286,0.2142,-0.7699,-0.5528,0.3189,-0.6561,0.704,0.2717,-0.6561,-0.704,0.2717,-0.7699,0.5528,0.3189,-0.3225,0.9217,0.2155,-0.7689,-0.3805,0.5137,-0.4654,0.8286,0.311,-0.6929,-0.5528,0.463,-0.5904,0.704,0.3945,-0.5904,-0.704,0.3945,-0.6929,0.5528,0.463,-0.4654,-0.8286,0.311,-0.7689,0.3805,0.5137,-0.3225,-0.9217,0.2155,-0.8157,0.1939,0.545,-0.1671,-0.9796,0.1116,-0.8314,0,0.5556,-0.1671,0.9796,0.1116,-0.8157,-0.1939,0.545,-0.6539,0.3805,0.6539,-0.2743,-0.9217,0.2743,-0.6937,0.1939,0.6937,-0.1421,-0.9796,0.1421,-0.7071,0,0.7071,-0.1421,0.9796,0.1421,-0.6937,-0.1939,0.6937,-0.2743,0.9217,0.2743,-0.6539,-0.3805,0.6539,-0.3958,0.8286,0.3958,-0.5893,-0.5528,0.5893,-0.5021,0.704,0.5021,-0.5021,-0.704,0.5021,-0.5893,0.5528,0.5893,-0.3958,-0.8286,0.3958,-0.5137,-0.3805,0.7689,-0.311,0.8286,0.4654,-0.463,-0.5528,0.6929,-0.3945,0.704,0.5904,-0.3945,-0.704,0.5904,-0.463,0.5528,0.6929,-0.311,-0.8286,0.4654,-0.5137,0.3805,0.7689,-0.2155,-0.9217,0.3225,-0.545,0.1939,0.8157,-0.1116,-0.9796,0.1671,-0.5556,0,0.8314,-0.1116,0.9796,0.1671,-0.545,-0.1939,0.8157,-0.2155,0.9217,0.3225,-0.2142,-0.8286,0.5171,-0.1484,-0.9217,0.3583,-0.3539,0.3805,0.8544,-0.3754,0.1939,0.9063,-0.0769,-0.9796,0.1856,-0.3827,0,0.9239,-0.0769,0.9796,0.1856,-0.3754,-0.1939,0.9063,-0.1484,0.9217,0.3583,-0.3539,-0.3805,0.8544,-0.2142,0.8286,0.5171,-0.3189,-0.5528,0.7699,-0.2717,0.704,0.6561,-0.2717,-0.704,0.6561,-0.3189,0.5528,0.7699,-0.1804,-0.3805,0.907,-0.1626,-0.5528,0.8173,-0.1092,0.8286,0.549,-0.1385,0.704,0.6965,-0.1385,-0.704,0.6965,-0.1626,0.5528,0.8173,-0.1092,-0.8286,0.549,-0.1804,0.3805,0.907,-0.0757,-0.9217,0.3804,-0.1914,0.1939,0.9622,-0.0392,-0.9796,0.1971,-0.1951,0,0.9808,-0.0392,0.9796,0.1971,-0.1914,-0.1939,0.9622,-0.0757,0.9217,0.3804,0,-0.9217,0.3879,0,-0.9796,0.201,0,0,1,0,0.9796,0.201,0,-0.1939,0.981,0,0.9217,0.3879,0,-0.3805,0.9247,0,0.8286,0.5598,0,-0.5528,0.8333,0,0.704,0.7101,0,-0.704,0.7101,0,0.5528,0.8333,0,-0.8286,0.5598,0,0.3805,0.9247,0,0.1939,0.981,0.1385,0.704,0.6965,0.1385,-0.704,0.6965,0.1626,0.5528,0.8173,0.1092,-0.8286,0.549,0.1804,0.3805,0.907,0.0757,-0.9217,0.3804,0.1914,0.1939,0.9622,0.0392,-0.9796,0.1971,0.1951,0,0.9808,0.0392,0.9796,0.1971,0.1914,-0.1939,0.9622,0.0757,0.9217,0.3804,0.1804,-0.3805,0.907,0.1092,0.8286,0.549,0.1626,-0.5528,0.8173,0.3827,0,0.9239,0.0769,0.9796,0.1856,0.0769,-0.9796,0.1856,0.3754,-0.1939,0.9063,0.1484,0.9217,0.3583,0.3539,-0.3805,0.8544,0.2142,0.8286,0.5171,0.3189,-0.5528,0.7699,0.2717,0.704,0.6561,0.2717,-0.704,0.6561,0.3189,0.5528,0.7699,0.2142,-0.8286,0.5171,0.3539,0.3805,0.8544,0.1484,-0.9217,0.3583,0.3754,0.1939,0.9063,0.3945,-0.704,0.5904,0.3945,0.704,0.5904,0.463,0.5528,0.6929,0.311,-0.8286,0.4654,0.5137,0.3805,0.7689,0.2155,-0.9217,0.3225,0.545,0.1939,0.8157,0.1116,-0.9796,0.1671,0.5556,0,0.8314,0.1116,0.9796,0.1671,0.545,-0.1939,0.8157,0.2155,0.9217,0.3225,0.5137,-0.3805,0.7689,0.311,0.8286,0.4654,0.463,-0.5528,0.6929,0.1421,0.9796,0.1421,0.1421,-0.9796,0.1421,0.6937,-0.1939,0.6937,0.2743,0.9217,0.2743,0.6539,-0.3805,0.6539,0.3958,0.8286,0.3958,0.5893,-0.5528,0.5893,0.5021,0.704,0.5021,0.5021,-0.704,0.5021,0.5893,0.5528,0.5893,0.3958,-0.8286,0.3958,0.6539,0.3805,0.6539,0.2743,-0.9217,0.2743,0.6937,0.1939,0.6937,0.7071,0,0.7071,0.5904,0.704,0.3945,0.6929,0.5528,0.463,0.5904,-0.704,0.3945,0.4654,-0.8286,0.311,0.7689,0.3805,0.5137,0.3225,-0.9217,0.2155,0.8157,0.1939,0.545,0.1671,-0.9796,0.1116,0.8314,0,0.5556,0.1671,0.9796,0.1116,0.8157,-0.1939,0.545,0.3225,0.9217,0.2155,0.7689,-0.3805,0.5137,0.4654,0.8286,0.311,0.6929,-0.5528,0.463,0.9063,-0.1939,0.3754,0.3583,0.9217,0.1484,0.8544,-0.3805,0.3539,0.5171,0.8286,0.2142,0.7699,-0.5528,0.3189,0.6561,0.704,0.2717,0.6561,-0.704,0.2717,0.7699,0.5528,0.3189,0.5171,-0.8286,0.2142,0.8544,0.3805,0.3539,0.3583,-0.9217,0.1484,0.9063,0.1939,0.3754,0.1856,-0.9796,0.0769,0.9239,0,0.3827,0.1856,0.9796,0.0769,0.549,-0.8286,0.1092,0.907,0.3805,0.1804,0.3804,-0.9217,0.0757,0.9622,0.1939,0.1914,0.1971,-0.9796,0.0392,0.9808,0,0.1951,0.1971,0.9796,0.0392,0.9622,-0.1939,0.1914,0.3804,0.9217,0.0757,0.907,-0.3805,0.1804,0.549,0.8286,0.1092,0.8173,-0.5528,0.1626,0.6965,0.704,0.1385,0.6965,-0.704,0.1385,0.8173,0.5528,0.1626,0.9209,-0.3789,0.0907,0.3876,0.921,0.0381,0.5589,0.8274,0.055,0.8305,-0.5509,0.0818,0.7084,0.7023,0.0698,0.7084,-0.7023,0.0698,0.8305,0.5509,0.0818,0.5589,-0.8274,0.055,0.9209,0.3789,0.0907,0.3876,-0.921,0.0381,0.9764,0.193,0.0962,0.2009,-0.9794,0.0198,0.9952,0,0.098,0.2009,0.9794,0.0198,0.9764,-0.193,0.0962
                ];
  this.itemSize = 3;
  this.numIndices = 1440;
  this.primitive = 'TRIANGLES';

}

Object.assign( Hemisphere.prototype, {

  // setTexture: function(texture){
  //   this.WebGLTexture = texture.WebGLTexture;
  // },
  // 
  // createProgram: function(vertexShader, fragmentShader) {
  //   console.log('Create program');
  //   this.program = createProgram( this.context, vertexShader, fragmentShader );
  //   
  //   this.program.vertexPositionAttribute = this.context.getAttribLocation(this.program, 'aVertexPosition');
  //   this.context.enableVertexAttribArray(this.program.vertexPositionAttribute);
  //   
  //   this.program.vertexNormalAttribute = this.context.getAttribLocation(this.program, 'aVertexNormal');
  //   this.context.enableVertexAttribArray(this.program.vertexNormalAttribute);
  //   
  //   this.program.modelMatrixUniform = this.context.getUniformLocation(this.program, 'uModelMatrix');
  //   this.program.viewMatrixUniform = this.context.getUniformLocation(this.program, 'uViewMatrix');
  //   this.program.projectionMatrixUniform = this.context.getUniformLocation(this.program, 'uProjectionMatrix');
  //   
  //   this.program.uTime = this.context.getUniformLocation(this.program, 'uTime');
  //   //this.program.uScreenResolution = this.context.getUniformLocation(this.program, 'uScreenResolution');
  //   
  //   //if (this.WebGLTexture) {
  //     this.program.uSampler = this.context.getUniformLocation(this.program, 'uSampler');
  //   //}
  //   
  //   this.renderer.useProgram(this.program);//use program before adding static uniforms
  //   
  //   
  // },
  // 
  // sendMatrixUniforms: function(camera) {
  //   this.context.uniformMatrix4fv(this.program.modelMatrixUniform, false, this.modelMatrix.get());
  //   this.context.uniformMatrix4fv(this.program.projectionMatrixUniform, false, camera.projectionMatrix.get());
  //   this.context.uniformMatrix4fv(this.program.viewMatrixUniform, false, camera.viewMatrix.get());
  // },
  // 
  // render: function( camera, time ){
  //   if(this.draw){
  //     this.renderer.useProgram(this.program);
  //     
  //     this.renderer.bindBuffer('ELEMENT_ARRAY_BUFFER', this.indexBuffer);
  //     this.renderer.bindBuffer('ARRAY_BUFFER', this.vertexPositionBuffer);
  //     this.renderer.vertexAttribPointer(this.program.vertexPositionAttribute, this.itemSize, 'FLOAT', false, 0, 0);
  //     
  //     this.renderer.vertexAttribPointer(this.program.vertexNormalAttribute, this.itemSize, 'FLOAT', false, 0, 0);
  //     
  //     this.sendMatrixUniforms(camera);
  //     this.renderer.drawElements(this.program, this.numIndices, time, this.WebGLTexture);
  //   }
  // }

} );

export { Hemisphere };
