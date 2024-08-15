var spineWidget;
document.addEventListener("DOMContentLoaded", function() {
    let folderSpine = `spine/poster/`;
    let folderCutIn = `spine/cutin/`;
    let folderArtificial = `spine/artificial/`;
    let folderCrossfaction = `spine/crossfaction/`;
    let folderFaction = `spine/faction/`;
    let folderNPC = `spine/npc/`;
    let folderCarrier = `spine/carrier/`;
    let folderPet = `spine/pet/`;
    let folderSkin = `spine/skin/`;
    let folderUI = `spine/ui/`;
    let folderPlayer = `spine/Player/`;
    let defaultAnimationName = "eye_idle";
    let defaultSkinName = "normal";
    let widgetDivSpine = document.getElementById("spine-widget-spine");
    let widgetDivCutIn = document.getElementById("spine-widget-cutin");
    let widgetDivArtificial = document.getElementById("spine-widget-artificial");
    let widgetDivCrossfaction = document.getElementById("spine-widget-crossfaction");
    let widgetDivFaction = document.getElementById("spine-widget-faction");
    let widgetDivNPC = document.getElementById("spine-widget-npc");
    let widgetDivCarrier = document.getElementById("spine-widget-carrier");
    let widgetDivPet = document.getElementById("spine-widget-pet");
    let widgetDivSkin = document.getElementById("spine-widget-skin");
    let widgetDivUI = document.getElementById("spine-widget-ui");
    let widgetDivPlayer = document.getElementById("spine-widget-Player");
    let modelSelectorSpine = document.getElementById("modelSelectorSpine");
    let modelSelectorCutIn = document.getElementById("modelSelectorCutIn");
    let modelSelectorArtificial = document.getElementById("modelSelectorArtificial");
    let modelSelectorCrossfaction = document.getElementById("modelSelectorCrossfaction");
    let modelSelectorFaction = document.getElementById("modelSelectorFaction");
    let modelSelectorNPC = document.getElementById("modelSelectorNPC");
    let modelSelectorCarrier = document.getElementById("modelSelectorCarrier");
    let modelSelectorPet = document.getElementById("modelSelectorPet");
    let modelSelectorSkin = document.getElementById("modelSelectorSkin");
    let modelSelectorUI = document.getElementById("modelSelectorUI");
    let modelSelectorPlayer = document.getElementById("modelSelectorPlayer");
    let skinSelector = document.getElementById("skinSelector");
    let sliderTamanoCanvas = document.getElementById("sliderTamanoCanvas");

    document.getElementById("toggleSidebar").addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });

    document.getElementById("toggleTheme").addEventListener("click", function() {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.removeAttribute("data-theme");
            this.textContent = "Night Mode";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            this.textContent = "Day Mode";
        }
    });

    function cargarOpcionesDesdeJsonSpine() {
        fetch('data/poster.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorSpine, data.files, cargarSpine);
                limpiarWidgetDiv(widgetDivSpine);
            })
            .catch(error => console.error('Error al cargar los archivos de Poster: ', error));
    }

    function cargarOpcionesDesdeJsonCutIn() {
        fetch('data/cutin.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorCutIn, data.files, cargarCutIn);
                limpiarWidgetDiv(widgetDivCutIn);
            })
            .catch(error => console.error('Error al cargar los archivos de CutIn: ', error));
    }
    function cargarOpcionesDesdeJsonArtificial() {
        fetch('data/artificial.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorArtificial, data.files, cargarArtificial);
                limpiarWidgetDiv(widgetDivArtificial);
            })
            .catch(error => console.error('Error al cargar los archivos de Artificial: ', error));
    }
    function cargarOpcionesDesdeJsonCrossfaction() {
        fetch('data/crossfaction.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorCrossfaction, data.files, cargarCrossfaction);
                limpiarWidgetDiv(widgetDivCrossfaction);
            })
            .catch(error => console.error('Error al cargar los archivos de Crossfaction: ', error));
    }
    function cargarOpcionesDesdeJsonFaction() {
        fetch('data/faction.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorFaction, data.files, cargarFaction);
                limpiarWidgetDiv(widgetDivFaction);
            })
            .catch(error => console.error('Error al cargar los archivos de Faction: ', error));
    }
    function cargarOpcionesDesdeJsonNPC() {
        fetch('data/npc.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorNPC, data.files, cargarNPC);
                limpiarWidgetDiv(widgetDivNPC);
            })
            .catch(error => console.error('Error al cargar los archivos de NPC: ', error));
    }
    function cargarOpcionesDesdeJsonCarrier() {
        fetch('data/carrier.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorCarrier, data.files, cargarCarrier);
                limpiarWidgetDiv(widgetDivCarrier);
            })
            .catch(error => console.error('Error al cargar los archivos de Carrier: ', error));
    }
    function cargarOpcionesDesdeJsonPet() {
        fetch('data/pet.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorPet, data.files, cargarPet);
                limpiarWidgetDiv(widgetDivPet);
            })
            .catch(error => console.error('Error al cargar los archivos de Pet: ', error));
    }
    function cargarOpcionesDesdeJsonSkin() {
        fetch('data/skin.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorSkin, data.files, cargarSkin);
                limpiarWidgetDiv(widgetDivSkin);
            })
            .catch(error => console.error('Error al cargar los archivos de Skin: ', error));
    }
    function cargarOpcionesDesdeJsonUI() {
        fetch('data/ui.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorUI, data.files, cargarUI);
                limpiarWidgetDiv(widgetDivUI);
            })
            .catch(error => console.error('Error al cargar los archivos de UI: ', error));
    }
    function cargarOpcionesDesdeJsonPlayer() {
        fetch('data/Player.json')
            .then(response => response.json())
            .then(data => {
                cargarOpciones(modelSelectorPlayer, data.files, cargarPlayer);
                limpiarWidgetDiv(widgetDivPlayer);
            })
            .catch(error => console.error('Error al cargar los archivos de Player: ', error));
    }

    function cargarOpciones(selector, archivos, callbackCarga) {
        let placeholderOption = new Option("Select a model", "", true, true);
        placeholderOption.disabled = true;
        selector.add(placeholderOption);

        archivos.forEach(function(archivo) {
            let opcion = new Option(archivo.split('.')[0], archivo.split('.')[0]);
            selector.add(opcion);
        });

        selector.addEventListener("change", function() {
            let modelName = this.value;
            callbackCarga(modelName);
        });
    }

    function limpiarWidgetDiv(widgetDiv) {
        widgetDiv.innerHTML = '';
    }

    function cargarSpine(modelName) {
        limpiarWidgetDiv(widgetDivSpine);
        loadAnimation(widgetDivSpine, folderSpine, modelName);
    }

    function cargarCutIn(modelName) {
        limpiarWidgetDiv(widgetDivCutIn);
        loadAnimation(widgetDivCutIn, folderCutIn, modelName);
    }
    function cargarArtificial(modelName) {
        limpiarWidgetDiv(widgetDivArtificial);
        loadAnimation(widgetDivArtificial, folderArtificial, modelName);
    }
    function cargarCrossfaction(modelName) {
        limpiarWidgetDiv(widgetDivCrossfaction);
        loadAnimation(widgetDivCrossfaction, folderCrossfaction, modelName);
    }
    function cargarFaction(modelName) {
        limpiarWidgetDiv(widgetDivFaction);
        loadAnimation(widgetDivFaction, folderFaction, modelName);
    }
    function cargarNPC(modelName) {
        limpiarWidgetDiv(widgetDivNPC);
        loadAnimation(widgetDivNPC, folderNPC, modelName);
    }
    function cargarCarrier(modelName) {
        limpiarWidgetDiv(widgetDivCarrier);
        loadAnimation(widgetDivCarrier, folderCarrier, modelName);
    }
    function cargarPet(modelName) {
        limpiarWidgetDiv(widgetDivPet);
        loadAnimation(widgetDivPet, folderPet, modelName);
    }
    function cargarSkin(modelName) {
        limpiarWidgetDiv(widgetDivSkin);
        loadAnimation(widgetDivSkin, folderSkin, modelName);
    }
    function cargarUI(modelName) {
        limpiarWidgetDiv(widgetDivUI);
        loadAnimation(widgetDivUI, folderUI, modelName);
    }
    function cargarPlayer(modelName) {
        limpiarWidgetDiv(widgetDivPlayer);
        loadAnimation(widgetDivPlayer, folderPlayer, modelName);
    }

    function loadAnimation(widgetDiv, folder, modelName) {
        if (modelName != null) {
            var existingButtonsDiv = document.getElementById('botonesanimacion');
            if (existingButtonsDiv) {
                existingButtonsDiv.remove();
            }
            new spine.SpineWidget(widgetDiv.id, {
                atlas: folder + modelName + ".atlas",
                skel: folder + modelName + ".skel",
                backgroundColor: "#00000000",
                premultipliedAlpha: true,
                fitToCanvas: true,
                loop: true,
                success: function(widget) {
                    commonSuccess(widget, widgetDiv);
                    spineWidget = widget;

                    var sidebar = document.getElementById('animacionBotones');

                    var buttonsDiv = document.createElement('div');
                    buttonsDiv.id = 'botonesanimacion';

                    var animations = widget.skeleton.data.animations;
                    animations.forEach(function(animation) {
                        var btn = document.createElement('button');
                        btn.className = 'btn btn-secondary mb-1 p-2';
                        btn.innerHTML = animation.name;
                        btn.onclick = function() { changeAnimation(animation.name); };
                        buttonsDiv.appendChild(btn);
                    });

                    sidebar.appendChild(buttonsDiv);
                    cargarOpcionesSkin(widget.skeleton.data.skins);
                },
                error: function(Player, reason) {
                    widgetDiv.setAttribute("error", reason)
                }
            });
        }
    }

    function commonSuccess(widget, widgetDiv) {
        let animations = widget.skeleton.data.animations;
        let skins = widget.skeleton.data.skins;
        if (animations.some(search => search.name === defaultAnimationName))
            widget.setAnimation(defaultAnimationName);
        if (skins.some(search => search.name === defaultSkinName))
            widget.setSkinByName(defaultSkinName);
        console.log(widget);
        widgetDiv.style.position = "absolute";
        widgetDiv.style.display = "block";
        widgetDiv.style.width = `${widget.bounds.size.x}px`;
        widgetDiv.style.height = `${widget.bounds.size.y}px`;
    }

    function cargarOpcionesSkin(skins) {
        skinSelector.innerHTML = '';
        skins.forEach(function(skin) {
            let opcion = new Option(skin.name, skin.name);
            skinSelector.add(opcion);
        });

        skinSelector.addEventListener("change", function() {
            let skinName = this.value;
            changeSkin(skinName);
        });
    }

    function changeSkin(skinName) {
        if (spineWidget && spineWidget.skeleton) {
            spineWidget.setSkinByName(skinName);
            spineWidget.skeleton.setToSetupPose();
            spineWidget.state.apply(spineWidget.skeleton);
        }
    }

    document.getElementById("spine-widget-spine").style.display = "none";
    document.getElementById("spine-widget-cutin").style.display = "none";
    document.getElementById("spine-widget-artificial").style.display = "none";
    document.getElementById("spine-widget-crossfaction").style.display = "none";
    document.getElementById("spine-widget-faction").style.display = "none";
    document.getElementById("spine-widget-npc").style.display = "none";
    document.getElementById("spine-widget-carrier").style.display = "none";
    document.getElementById("spine-widget-pet").style.display = "none";
    document.getElementById("spine-widget-skin").style.display = "none";
    document.getElementById("spine-widget-ui").style.display = "none";
    document.getElementById("spine-widget-Player").style.display = "none";

    let btnLimpiar = document.getElementById("btnLimpiar");

    btnLimpiar.addEventListener("click", function() {
        limpiarWidgets();
    });

    function limpiarWidgets() {
        let widgetDivSpine = document.getElementById("spine-widget-spine");
        let widgetDivCutIn = document.getElementById("spine-widget-cutin");
        let widgetDivArtificial = document.getElementById("spine-widget-artificial");
        let widgetDivCrossfaction = document.getElementById("spine-widget-crossfaction");
        let widgetDivFaction = document.getElementById("spine-widget-faction");
        let widgetDivNPC = document.getElementById("spine-widget-npc");
        let widgetDivCarrier = document.getElementById("spine-widget-carrier");
        let widgetDivPet = document.getElementById("spine-widget-pet");
        let widgetDivSkin = document.getElementById("spine-widget-skin");
        let widgetDivUI = document.getElementById("spine-widget-ui");
        let widgetDivPlayer = document.getElementById("spine-widget-Player");
        let IdBotonesAnimacion = document.getElementById("botonesanimacion");

        widgetDivSpine.innerHTML = '';
        widgetDivCutIn.innerHTML = '';
        widgetDivArtificial.innerHTML = '';
        widgetDivCrossfaction.innerHTML = '';
        widgetDivFaction.innerHTML = '';
        widgetDivNPC.innerHTML = '';
        widgetDivCarrier.innerHTML = '';
        widgetDivPet.innerHTML = '';
        widgetDivSkin.innerHTML = '';
        widgetDivUI.innerHTML = '';
        widgetDivPlayer.innerHTML = '';
        IdBotonesAnimacion.innerHTML = '';

        widgetDivSpine.style.display = "none";
        widgetDivCutIn.style.display = "none";
        widgetDivArtificial.style.display = "none";
        widgetDivCrossfaction.style.display = "none";
        widgetDivFaction.style.display = "none";
        widgetDivNPC.style.display = "none";
        widgetDivCarrier.style.display = "none";
        widgetDivPet.style.display = "none";
        widgetDivSkin.style.display = "none";
        widgetDivUI.style.display = "none";
        widgetDivPlayer.style.display = "none";
        IdBotonesAnimacion.style.display = "none";

        modelSelectorSpine.selectedIndex = 0;
        modelSelectorCutIn.selectedIndex = 0;
        modelSelectorArtificial.selectedIndex = 0;
        modelSelectorCrossfaction.selectedIndex = 0;
        modelSelectorFaction.selectedIndex = 0;
        modelSelectorNPC.selectedIndex = 0;
        modelSelectorCarrier.selectedIndex = 0;
        modelSelectorPet.selectedIndex = 0;
        modelSelectorSkin.selectedIndex = 0;
        modelSelectorUI.selectedIndex = 0;
        modelSelectorPlayer.selectedIndex = 0;

        sliderTamanoCanvas.value = 1;
    }

    var widgetContainer = document.getElementById("widget-container");

    var posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    widgetContainer.onmousedown = function(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    function elementDrag(e) {
        posX = mouseX - e.clientX;
        posY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        widgetContainer.style.top = (widgetContainer.offsetTop - posY) + "px";
        widgetContainer.style.left = (widgetContainer.offsetLeft - posX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    cargarOpcionesDesdeJsonSpine();
    cargarOpcionesDesdeJsonCutIn();
    cargarOpcionesDesdeJsonArtificial();
    cargarOpcionesDesdeJsonCrossfaction();
    cargarOpcionesDesdeJsonFaction();
    cargarOpcionesDesdeJsonNPC();
    cargarOpcionesDesdeJsonCarrier();
    cargarOpcionesDesdeJsonPet();
    cargarOpcionesDesdeJsonSkin();
    cargarOpcionesDesdeJsonUI();
    cargarOpcionesDesdeJsonPlayer();
});

function changeAnimation(animationName) {
    if (spineWidget && spineWidget.state) {
        spineWidget.state.setAnimation(0, animationName, true);
    }
}