const modals = (state) => {
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, state) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

        trigger.forEach(item => {
            
            item.addEventListener('click', (e) => {
                switch (e.target.className) {
                    case "button popup_calc_button" : 
                    if (String(state.form) && state.width && state.height) {
                        if(e.target) e.preventDefault();
                windows.forEach(item => {
                    item.style.display = 'none';
                });
            modal.style.display = "block"
            document.body.style.overflow = "hidden"
            document.body.style.marginRight = `${scroll}px`
                    } else { alert('All feilds are mandatory!') 
                    return 
                }
                    
                        
                        break;
                    case "button popup_calc_profile_button" :
                        if (String(state.form) && state.width && state.height && state.type && state.profile){
                            if(e.target) e.preventDefault();
                windows.forEach(item => {
                    item.style.display = 'none';
                });
            modal.style.display = "block"
            // document.body.style.overflow = "hidden"
            document.body.style.overflow = "hidden"
            document.body.style.marginRight = `${scroll}px`
                        } else { alert('All feilds are mandatory!') 
                        return 
                    }
    
                    break;
                     

                    default : if(e.target) e.preventDefault();
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                        modal.style.display = "block"
                        document.body.style.overflow = "hidden"
                        document.body.style.marginRight = `${scroll}px`
                        break
                    
                }


                


            })
        })

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = "none";
            document.body.style.overflow = ""
            document.body.style.marginRight = `0px`
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                document.body.style.overflow = ""
                document.body.style.marginRight = `0px`
            }
        })
    }
    
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden"
            document.body.style.marginRight = `0px`
        }, time);
    }
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visability = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal()
    // showModalByTime('.popup', 60000)
};

export default modals;