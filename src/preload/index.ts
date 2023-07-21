import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electron', {
  doThing: () => ipcRenderer.invoke('do-thing'),
});
