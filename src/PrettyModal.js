export class PrettyModal {
    constructor() {
        this.injectStyles()
    }

    open(dialogId){

        const dialog = document.getElementById(dialogId)
        if(!dialog) return

        const origin = event.currentTarget
        
        const randomId = Math.random().toString(36).substring(2, 9);
        origin.dataset.flipId = randomId;
        dialog.dataset.flipId = randomId;
        origin.dataset.pmOriginId = randomId

        const originState = Flip.getState(origin)

        dialog.showModal()

        Flip.from(originState, {
            targets: dialog,
            duration: 0.7,
            ease: "elastic.out(1,0.75)",
            scale: true,
            toggleClass: "pretty-modal-opening"
        })

    }

    close(dialogId){

        const dialog = document.getElementById(dialogId)
        if(!dialog) return

        const originId = dialog.dataset.flipId;
        const origin = document.querySelector(`[data-pm-origin-id="${originId}"]`);

        const originState = Flip.getState(origin);

        Flip.to(originState, {
            targets: dialog,
            ease: "power4.out",
            scale: true,
            toggleClass: "pretty-modal-closing",
            onComplete: () => {
                dialog.setAttribute("style", "")
                dialog.close()
            }
        })

    }

    injectStyles() {
        // Evitar inyectar múltiples veces
        if (document.getElementById('pretty-modal-styles')) return;

        const styles = `

            .pretty-modal-opening {
                animation: pretty-modal-opening 500ms cubic-bezier(.56,.27,0,1);
            }

            @keyframes pretty-modal-opening{
                from { opactiy: 0; filter: blur(8px) } to { opacity: 1; filter: blur(0px) }
            }

            .pretty-modal-closing {
                animation: 
                    pretty-modal-closing-border-radius 500ms cubic-bezier(.56,.27,0,1), 
                    pretty-modal-closing-blur 500ms cubic-bezier(.37,.35,0,1), 
                    pretty-modal-closing-fade 700ms cubic-bezier(.56,.27,0,1)
                ;
            }
            
            @keyframes pretty-modal-closing-border-radius {
                to { border-radius:400px; }
            }

            @keyframes pretty-modal-closing-blur {
                0% { filter: blur(0); } 100% { filter: blur(32px); }
            }

            @keyframes pretty-modal-closing-fade {
                from { opacity: 1; } to { opacity: 0; }
            }

        `;

        const styleSheet = document.createElement('style');
        styleSheet.id = 'pretty-modal-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}