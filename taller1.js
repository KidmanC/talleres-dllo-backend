//1
function ConvertidorTemp(C){
    let F = C * (9/5) + 32
    return F
}

//2
function resolvedor(a, b, c, r){
    x1 = (-b + (b**2 - 4*a*c)**(1/2))/2*a
    x2 = (-b - (b**2 - 4*a*c)**(1/2))/2*a
    if (r = 1){
        return x1
    }else{
        return x2
    }
}

//3
function mejorParidad(a){
    if(a%2 == 0){
        return true
    }else{
        return false
    }
}

//4
function peorParidad(b){
    if(b == 1){
        return false
    }else if(b == 2){
        return true
    }else if (b == 3){
        return false
    }else if (b == 4){
        return true
    }else if(b == 5){
        return false
    }else if (b == 6){
        return true
    }else if (b == 7){
        return false
    }else if(b == 8){
        return true
    }else if (b == 9){
        return false
    }else if (b == 10){
        return true
    }
}


