var CanvasComponent = {
    oninit: function(vnode) {
        vnode.state.dragging = false;
        vnode.state.canvasCreated = false;
        vnode.state.x = 0;
        vnode.state.y = 0;

        vnode.state.mouseDown = function(e) {
            vnode.state.dragging = true;
            vnode.state.offsetX = e.clientX - vnode.state.x;
            vnode.state.offsetY = e.clientY - vnode.state.y;
        };

        vnode.state.mouseMove = function(e) {
            if (vnode.state.dragging) {
                vnode.state.x = e.clientX - vnode.state.offsetX;
                vnode.state.y = e.clientY - vnode.state.offsetY;
                m.redraw();
            }
        };

        vnode.state.mouseUp = function() {
            vnode.state.dragging = false;
        };

        vnode.state.createOrUpdateCanvas = function() {
            if (!vnode.state.canvasCreated) {
                document.body.appendChild(vnode.dom);
                vnode.state.canvasCreated = true;
            }
        };
    },
    oncreate: function(vnode) {
        document.addEventListener('mousemove', vnode.state.mouseMove);
        document.addEventListener('mouseup', vnode.state.mouseUp);

        // Escuchar cambios en los selectores para crear o actualizar el canvas
        var selectors = ['modelSelectorSpine', 'modelSelectorCutIn', 'modelSelectorArtificial'];
        selectors.forEach(function(selectorId) {
            var selector = document.getElementById(selectorId);
            if (selector) {
                selector.addEventListener('change', vnode.state.createOrUpdateCanvas);
            }
        });
    },
    onremove: function(vnode) {
        document.removeEventListener('mousemove', vnode.state.mouseMove);
        document.removeEventListener('mouseup', vnode.state.mouseUp);

        // Limpiar los event listeners de los selectores si es necesario
    },
    view: function(vnode) {
        return m('canvas', {
            style: {
                position: 'absolute',
                left: vnode.state.x + 'px',
                top: vnode.state.y + 'px',
                border: '1px solid black' // Solo para visualización
            },
            onmousedown: vnode.state.mouseDown
        }, "Tu canvas aquí");
    }
};

// Asegúrate de que el componente se monte solo cuando sea necesario, por ejemplo,
// puedes montarlo en un elemento específico que no afecte el resto del contenido de la web.
