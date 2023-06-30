let submitRegistrationInfo = ()=>{
    console.log("submitinfo")
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;

    console.log(fname);
    console.log(lname);

    localStorage.setItem("first_name",fname);
    localStorage.setItem("last_name",lname);
    //Page will reload automatically
    window.location.reload(true);
}

let playSound = ()=>{
    //alert('sound')
    let audio = document.querySelector('.g_audio').play();
}

let logout = ()=>{
    localStorage.clear();
    //Page will reload automatically
    window.location.reload(true);
}

//()();  IIFE(immediately Invoked Function Expression)
(()=>{
    let fn = window.localStorage.getItem('first_name')
    let ln = window.localStorage.getItem('last_name')
    let l_pinky = document.querySelector('.g_left_pinky')
    let l_ring = document.querySelector('.g_left_ring')
    let l_middle = document.querySelector('.g_left_middle')

    console.log("page loaded successfully");

    var modal = document.getElementById("registrationModal")
    var showModal = new bootstrap.Modal(modal);

    console.log(fn)
    if(fn === null){
        showModal.show();
    }else{
        //alert("you have successfully registered")
    }

    
    if(fn !== null){
        document.querySelector('.g_welcome').innerHTML = 'welcome' +' '+ fn +' '+ ln +' '+ '<button class="btn btn-sm position-absolute ms-4 g_logout" onclick="logout()">Logout</button>';
    }

    //KeyPress sound play
    document.addEventListener("keypress",(e)=>{
        //console.log(e.keyCode)
        if(e.keyCode === 97){
            let a = document.querySelector(".g_a");
            console.log(a.classList.add("g_active"));
            l_pinky.style.display = 'block';
        }
        playSound();
    
        if(e.keyCode === 98){
            let b = document.querySelector(".g_b");
            console.log(b.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 99){
            let c = document.querySelector(".g_c");
            console.log(c.classList.add("g_active"));
            l_middle.style.display = 'block';
        }
        playSound();
    
        if(e.keyCode === 100){
            let d = document.querySelector(".g_d");
            console.log(d.classList.add("g_active"));
            l_middle.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 101){
            let e = document.querySelector(".g_e");
            console.log(e.classList.add("g_active"));
            l_middle.style.display = 'block';
        }
        playSound();
    
        if(e.keyCode === 102){
            let f = document.querySelector(".g_f");
            console.log(f.classList.add("g_active"));
            l_middle.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 103){
            let g = document.querySelector(".g_g");
            console.log(g.classList.add("g_active"));
            l_pinky.style.display = 'block';
        }
        playSound();
    
        if(e.keyCode === 104){
            let h = document.querySelector(".g_h");
            console.log(h.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();    

        if(e.keyCode === 105){
            let i = document.querySelector(".g_i");
            console.log(i.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 106){
            let j = document.querySelector(".g_j");
            console.log(j.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 107){
            let k = document.querySelector(".g_k");
            console.log(k.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 108){
            let l = document.querySelector(".g_l");
            console.log(l.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 109){
            let m = document.querySelector(".g_m");
            console.log(m.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 110){
            let n = document.querySelector(".g_n");
            console.log(n.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 111){
            let o = document.querySelector(".g_o");
            console.log(o.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 112){
            let p = document.querySelector(".g_p");
            console.log(p.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 113){
            let q = document.querySelector(".g_q");
            console.log(q.classList.add("g_active"));
            l_pinky.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 114){
            let r = document.querySelector(".g_r");
            console.log(r.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 115){
            let s = document.querySelector(".g_s");
            console.log(s.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 116){
            let t = document.querySelector(".g_t");
            console.log(t.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 117){
            let u = document.querySelector(".g_u");
            console.log(u.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 118){
            let v = document.querySelector(".g_v");
            console.log(v.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 119){
            let w = document.querySelector(".g_w");
            console.log(w.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 120){
            let x = document.querySelector(".g_x");
            console.log(x.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();  

        if(e.keyCode === 121){
            let y = document.querySelector(".g_y");
            console.log(y.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 122){
            let z = document.querySelector(".g_z");
            console.log(z.classList.add("g_active"));
            l_pinky.style.display = 'block';
        }
        playSound();

        if(e.keyCode === 32){
            let space = document.querySelector(".g_space");
            console.log(space.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        playSound();

        if(e.keyCode === 92){
            let g_slace = document.querySelector(".g_slace");
            console.log(g_slace.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 45){
            let sub = document.querySelector(".g_sub");
            console.log(sub.classList.add("g_active"));
            l_ring.style.display = 'block';
        }

        playSound();

        if(e.keyCode === 61){
            let equal = document.querySelector(".g_equal");
            console.log(equal.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();   

        if(e.keyCode === 59){
            let semi = document.querySelector(".g_semi");
            console.log(semi.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();    

        if(e.keyCode === 91){
            let array_right = document.querySelector(".g_array_right");
            console.log(array_right.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();    

        if(e.keyCode === 93){
            let array_left = document.querySelector(".g_array_left");
            console.log(array_left.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 

        if(e.keyCode === 39){
            let g_koma = document.querySelector(".g_koma");
            console.log(g_koma.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();

        if(e.keyCode === 62){
            let smallers = document.querySelector(".g_smaller");
            console.log(smallers.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound();    

        if(e.keyCode === 63){
            let question = document.querySelector(".g_question");
            console.log(question.classList.add("g_active"));
            l_ring.style.display = 'block';
        }
        playSound(); 
        
    })


    document.addEventListener("keyup",(e)=>{
        var elements = document.getElementsByClassName('g_active');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('g_active');
          l_pinky.style.display = 'none';
          l_ring.style.display = 'none';
          l_middle.style.display = 'none';
        }
    })
})();