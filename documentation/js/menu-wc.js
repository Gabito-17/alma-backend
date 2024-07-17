'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">alma-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaisesModule.html" data-type="entity-link" >PaisesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'data-bs-target="#xs-controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' :
                                            'id="xs-controllers-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' }>
                                            <li class="link">
                                                <a href="controllers/PaisesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaisesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' : 'data-bs-target="#xs-injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' :
                                        'id="xs-injectables-links-module-PaisesModule-013127fe67d2923512258f6551e17c4f395d155bae7f31da0feca5a4d150cc68a777526e047aff34244f5aaebc0ac525b70c5f07941a838f9f2bd1a7b42e0ae6"' }>
                                        <li class="link">
                                            <a href="injectables/PaisesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaisesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonasModule.html" data-type="entity-link" >PersonasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'data-bs-target="#xs-controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' :
                                            'id="xs-controllers-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' }>
                                            <li class="link">
                                                <a href="controllers/PersonasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' : 'data-bs-target="#xs-injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' :
                                        'id="xs-injectables-links-module-PersonasModule-c7a1cdefc54e878f1b8d7e43e026e8b91c4ef93975b93b50fa1c8e34707544afa103bc4c471a43a60f053de29b2440120d63330240f39d97b9a435ec8ccc13e2"' }>
                                        <li class="link">
                                            <a href="injectables/PersonasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SexosModule.html" data-type="entity-link" >SexosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'data-bs-target="#xs-controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' :
                                            'id="xs-controllers-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' }>
                                            <li class="link">
                                                <a href="controllers/SexosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SexosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' : 'data-bs-target="#xs-injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' :
                                        'id="xs-injectables-links-module-SexosModule-3e7319ae085acd95fa6542ed7718dd97e3c24d639e4293b2570cc0b85483a9bfe4057816a5ca5556a37fdab56f3a2d31a19fbaac55d283f1962492d24b05c0be"' }>
                                        <li class="link">
                                            <a href="injectables/SexosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SexosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TipoDocumentoModule.html" data-type="entity-link" >TipoDocumentoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'data-bs-target="#xs-controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' :
                                            'id="xs-controllers-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' }>
                                            <li class="link">
                                                <a href="controllers/TipoDocumentoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoDocumentoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' : 'data-bs-target="#xs-injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' :
                                        'id="xs-injectables-links-module-TipoDocumentoModule-a793cea57f298cda6c65d1838dd307724c89aa41e9c6901e434451bc56cc82891f1c6db2c1d443cd12902d30be639605ff2600cf6cc9e3aa43fa7dfafa1d235a"' }>
                                        <li class="link">
                                            <a href="injectables/TipoDocumentoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoDocumentoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PaisesController.html" data-type="entity-link" >PaisesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PersonasController.html" data-type="entity-link" >PersonasController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SexosController.html" data-type="entity-link" >SexosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TipoDocumentoController.html" data-type="entity-link" >TipoDocumentoController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Pais.html" data-type="entity-link" >Pais</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Personas.html" data-type="entity-link" >Personas</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Sexo.html" data-type="entity-link" >Sexo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TipoDocumento.html" data-type="entity-link" >TipoDocumento</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePaisDto.html" data-type="entity-link" >CreatePaisDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePersonaDto.html" data-type="entity-link" >CreatePersonaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSexoDto.html" data-type="entity-link" >CreateSexoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTipoDocumentoDto.html" data-type="entity-link" >CreateTipoDocumentoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Migrations1720475450803.html" data-type="entity-link" >Migrations1720475450803</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaisDto.html" data-type="entity-link" >UpdatePaisDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePersonaDto.html" data-type="entity-link" >UpdatePersonaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSexoDto.html" data-type="entity-link" >UpdateSexoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTipoDocumentoDto.html" data-type="entity-link" >UpdateTipoDocumentoDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaisesService.html" data-type="entity-link" >PaisesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonasService.html" data-type="entity-link" >PersonasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SexosService.html" data-type="entity-link" >SexosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipoDocumentoService.html" data-type="entity-link" >TipoDocumentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeOrmConfigService.html" data-type="entity-link" >TypeOrmConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});