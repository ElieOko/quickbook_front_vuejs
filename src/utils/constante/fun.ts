// Compile with --noImplicitThis
import { ref } from 'vue'

const isOpen = ref(false)
export function useSidebar() {
  return {
    isOpen,
  }
}
interface CallbackFunctionAuthCode{
 (message: string): Promise<Window>;
}

//Promise<Window>
export const OAuthCode: CallbackFunctionAuthCode = async (url: string) :Promise<Window> => {
  const loginPopupUri = () => {
                // Launch Popup
                let parameters = "location=1,width=800,height=650";
                parameters += ",left=" + (screen.width - 800) / 2 + ",top=" + (screen.height - 650) / 2;
                const win : Window | null = window.open(url, 'connectPopup', parameters) as Window;
                // const pollOAuth = window.setInterval(function() {
                //           if (win?.document?.URL?.indexOf("code") != -1) {
                //             window.clearInterval(pollOAuth);
                //             win?.close();
                //             location.reload();
                //         }  
                // }, 100);
                return win
            }
     return await (() => {
              return loginPopupUri();
            })()
        }

export const dateConvert = (dateInput:string) : string => {
const date = new Date(dateInput);
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear().toString().slice(-2);
const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
return formattedDate
}