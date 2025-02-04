import type { App } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faArrowCircleDown,
    faArrowUp,
    faBars,
    faCaretUp,
    faCaretDown,
    faCheck,
    faCircleNotch,
    faCogs,
    faDownload,
    faEdit,
    faEllipsisV,
    faExclamationTriangle,
    faEye,
    faFile,
    faFileCsv,
    faFilter,
    faHome,
    faInfoCircle,
    faKey,
    faLanguage,
    faLayerGroup,
    faLevelUpAlt,
    faLink,
    faMoon,
    faPlus,
    faQuestionCircle,
    faSearch,
    faSignOutAlt,
    faEyeSlash,
    faSort,
    faSun,
    faTable,
    faTimes,
    faTools,
    faTrashAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons"

library.add(
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faArrowCircleDown,
    faArrowUp,
    faBars,
    faCaretUp,
    faCaretDown,
    faCheck,
    faCircleNotch,
    faCogs,
    faDownload,
    faEdit,
    faEllipsisV,
    faEye,
    faExclamationTriangle,
    faFile,
    faFileCsv,
    faFilter,
    faHome,
    faInfoCircle,
    faKey,
    faLanguage,
    faLayerGroup,
    faLevelUpAlt,
    faLink,
    faMoon,
    faPlus,
    faQuestionCircle,
    faSearch,
    faSignOutAlt,
    faEyeSlash,
    faSort,
    faSun,
    faTable,
    faTimes,
    faTools,
    faTrashAlt,
    faUser
)

export const setupFonts = (app: App) => {
    app.component("font-awesome-icon", FontAwesomeIcon)
}
