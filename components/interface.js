import Widget from './widget.js'
import Source from './source.js'
import Files from './files.js'
import Terminal from './terminal.js'
import Directory from './directory.js'
import Report from './report.js'
import Social from './social.js'
import Visualizer from './visualizer.js'
import MintNft from './mint-nft.js'
import News from './news.js'
import Page from './page.js'
//import Static from './static.js'
//import EnterTransition from './enter-transition.js'
import Screen from './screen.js'
import Introduction from './introduction.js'
import UserInterface, { Pane, PaneRow, Sidebar } from './user-interface.js'
//import styles from './interface.module.sass'

// clear error with light-weight-charts library import
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('./chart.js'), {
  ssr: false
});

export default function Interface(props) {
  let layout = props.layout
  let widgets = props.widgets

  if (widgets == "intro") {
    
    return (
      <> 
        <div className="screenBg"></div>
        <Screen />
      </>
    )
  } else if (widgets == "home") {
    return (
      <> 
        <UserInterface layout={layout}>
          <Pane>
            <PaneRow name="primary">
              {/* Terminal */}
              <Widget type="intro" title="welcome_" icon="triangles">
                <Introduction />
              </Widget>
            </PaneRow>
            <PaneRow name="secondary">
              {/* Terminal */}
              <Widget type="terminal" title="terminal_" icon="triangles">
                <Terminal />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
              {/* Audio */}
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            {/* Menu */}
            <PaneRow name="fill">
              <span className="close-menu">close</span>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={widgets} />
              </Widget>
            </PaneRow>
            {/* Report */}
            <PaneRow>
              <Widget type="source" title="src_" icon="triangles">
                <Source />
              </Widget>
            </PaneRow>
            {/* Social */}
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }


  else if (widgets == "manifesto") {
    return (
      <> 
        <UserInterface layout={layout}>
          <Pane>
            <PaneRow name="primary">
              {/* Mint NFTs */}
              <Widget type={widgets} title="manifesto_" icon="triangles">
                <Page />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            {/* Audio */}
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            {/* Menu */}
            <PaneRow name="fill">
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={widgets} />
              </Widget>
            </PaneRow>
            {/* Report */}
            <PaneRow>
              <Widget type="source" title="src_" icon="triangles">
                <Source />
              </Widget>
            </PaneRow>
            {/* Social */}
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (widgets == "tv") {
    return (
      <> 
        <UserInterface layout={layout}>
          <Pane>
            <PaneRow name="primary">
              {/* Files */}
              <Widget type="files" title="files_" icon="triangles">
                <Files />
              </Widget>
            </PaneRow>

          </Pane>
          <Sidebar>
            {/* Audio */}
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            {/* Menu */}
            <PaneRow name="fill">
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={widgets} />
              </Widget>
            </PaneRow>
            {/* Report */}
            <PaneRow>
              <Widget type="source" title="src_" icon="triangles">
                <Source />
              </Widget>
            </PaneRow>
            {/* Social */}
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (widgets == "freedom") {
    return (
      <> 
        <UserInterface layout={layout}>
          <Pane>
            <PaneRow name="primary">
              {/* Terminal */}
              <Widget type="video" title="welcome_" icon="triangles">
              <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                <source src="/assets/video/freedom.mp4" type="video/mp4"/>
                <source src="/assets/video/freedom.webm" type="video/webm"/>
                <source src="/assets/video/freedom.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video>
              </Widget>
            </PaneRow>

          </Pane>
          <Sidebar>
            {/* Menu */}
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={widgets} />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              {/* Files */}
              <Widget type="files" title="files_" icon="triangles">
                <Files />
              </Widget>
            </PaneRow>
            {/* Report */}
            <PaneRow>
              <Widget type="source" title="src_" icon="triangles">
                <Source />
              </Widget>
            </PaneRow>
            {/* Social */}
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

}