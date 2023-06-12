
import {getData} from './Get'
export default {
  TaskAnalysisByDay () {
    return getData()
  },
  DashboardGorevlerShow (StatusID, Gun) {
    const data = {StatusID, Gun}
    return getData()
  }
}
