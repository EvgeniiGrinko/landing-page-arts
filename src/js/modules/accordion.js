const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
   


    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            
            if (!this.classList.contains('active-style')) {
                btns.forEach(btn => {
                    btn.nextElementSibling.style.maxHeight = '0px';
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                })
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                
            } else if (this.classList.contains('active-style')) {
                btns.forEach(btn => {
                    btn.nextElementSibling.style.maxHeight = '0px';
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                })
            } 
        })
    })
        // blocks = document.querySelectorAll(itemsSelector);

        // blocks.forEach(block => {
        //     block.classList.add('animated', 'fadeInDown');
        // });

        // btns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         if (!this.classList.contains('active')) {
        //             btns.forEach(btn => {
        //                 btn.classList.remove('active', 'active-style');
        //                 this.classList.add('active', 'active-style');
        //             })
        //         }
        //     })
        // })
}

export default accordion;