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
                    <a href="index.html" data-type="index-link">Firebase Google API</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' : 'data-target="#xs-components-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' :
                                            'id="xs-components-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' }>
                                            <li class="link">
                                                <a href="components/AlumnoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlumnoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClasesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClasesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClassroomComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClassroomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntregasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntregasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrabajoClaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrabajoClaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrabajoClaseListaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrabajoClaseListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrabajoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrabajoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' : 'data-target="#xs-injectables-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' :
                                        'id="xs-injectables-links-module-AppModule-985a10e6bd917abbd577153aca3c4889"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SnackService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SnackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FirebaseDbModule.html" data-type="entity-link">FirebaseDbModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' : 'data-target="#xs-components-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' :
                                            'id="xs-components-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' }>
                                            <li class="link">
                                                <a href="components/FirebaseDbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FirebaseDbComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' : 'data-target="#xs-injectables-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' :
                                        'id="xs-injectables-links-module-FirebaseDbModule-4ab6f5ba48db95a0adc28568f7b470b5"' }>
                                        <li class="link">
                                            <a href="injectables/FirebaseDbService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FirebaseDbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FirebaseDbRoutingModule.html" data-type="entity-link">FirebaseDbRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseInfo.html" data-type="entity-link">CourseInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrabajoClaseListaDataSource.html" data-type="entity-link">TrabajoClaseListaDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInfo.html" data-type="entity-link">UserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Assigment.html" data-type="entity-link">Assigment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Course.html" data-type="entity-link">Course</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseMaterial.html" data-type="entity-link">CourseMaterial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseMaterialSet.html" data-type="entity-link">CourseMaterialSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseWork.html" data-type="entity-link">CourseWork</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Date.html" data-type="entity-link">Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveFile.html" data-type="entity-link">DriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveFolder.html" data-type="entity-link">DriveFolder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Form.html" data-type="entity-link">Form</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalPermissions.html" data-type="entity-link">GlobalPermissions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IndividualStudentsOptions.html" data-type="entity-link">IndividualStudentsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link">Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Material.html" data-type="entity-link">Material</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link">Name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedDriveFile.html" data-type="entity-link">SharedDriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Students.html" data-type="entity-link">Students</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentSubmission.html" data-type="entity-link">StudentSubmission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Teachers.html" data-type="entity-link">Teachers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProfile.html" data-type="entity-link">UserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YouTubeVideo.html" data-type="entity-link">YouTubeVideo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});