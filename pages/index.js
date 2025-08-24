import { useState } from 'react';

export default function XXXTentacionFanPage() {
  const [selectedTrack, setSelectedTrack] = useState('');
  const [guestbookEntries, setGuestbookEntries] = useState([
    'Anonymous Visitor from Geocities.com - 08/20/25 15:30:45 - XXX FOREVER!!! RIP KING',
    'xXx_REVENGE_FAN_xXx from AOL.com - 08/20/25 14:22:12 - his music saved my life...',
    'JahsehForever99 from Hotmail.com - 08/20/25 13:15:33 - I WAS AT HIS LAST SHOW!!!'
  ]);
  const [newEntry, setNewEntry] = useState('');
  const [visitorName, setVisitorName] = useState('');

  const topTracks = [
    'Moonlight',
    'SAD!',
    'Jocelyn Flores',
    'Changes',
    'Look At Me!',
    'Revenge',
    'Fuck Love',
    'Hope',
    'Falling Down',
    'Everybody Dies'
  ];

  const addGuestbookEntry = () => {
    if (!newEntry.trim() || !visitorName.trim()) return;

    const timestamp = new Date().toLocaleString();
    const entry = `${visitorName} from ${Math.random() > 0.5 ? 'AOL.com' : 'Hotmail.com'} - ${timestamp} - ${newEntry}`;

    setGuestbookEntries(prev => [entry, ...prev]);
    setNewEntry('');
  };

  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      background: '#000080',
      color: '#FFFF00',
      minHeight: '100vh',
      padding: '0',
      margin: '0'
    }}>
      {/* Retro under construction banner */}
      <div style={{
        background: 'linear-gradient(90deg, #FF0000, #FFFF00, #FF0000)',
        padding: '5px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#000',
        borderBottom: '3px solid #FF0000'
      }}>
        🚧 UNDER CONSTRUCTION 🚧 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 🚧
      </div>

      {/* Main content table layout */}
      <table width="100%" cellPadding="0" cellSpacing="10" style={{ background: '#000080' }}>
        <tr>
          <td colSpan="2" align="center">
            <h1 style={{
              fontSize: '48px',
              color: '#FF00FF',
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 0px #00FF00',
              letterSpacing: '5px',
              margin: '20px 0'
            }}>
              *** XXXTENTACION MEMORIAL PAGE ***
            </h1>

            <img
              src="/spinning-skull.gif"
              width="50"
              height="50"
              style={{ margin: '0 10px' }}
              alt="spinning skull"
            />

            <font size="6" color="#00FF00">
              <blink>★ LONG LIVE JAHSEH ★</blink>
            </font>

            <img
              src="/spinning-skull.gif"
              width="50"
              height="50"
              style={{ margin: '0 10px' }}
              alt="spinning skull"
            />

            <br /><br />

            <marquee behavior="scroll" direction="left" scrollamount="5" style={{
              background: '#FF0000',
              color: '#FFFF00',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px'
            }}>
              💀💀💀 XXXTENTACION FOREVER - JUNE 18 1998 - JUNE 18 2018 - RIP KING 💀💀💀
            </marquee>
            <marquee behavior="scroll" direction="left" scrollamount="5" style={{
              background: '#FF0000',
              color: '#FFFF00',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px'
            }}>
              💀💀💀 Test 2 💀💀💀
            </marquee>
            <marquee behavior="scroll" direction="left" scrollamount="5" style={{
              background: '#FF0000',
              color: '#FFFF00',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px'
            }}>
              💀💀💀 Test 3 💀💀💀
            </marquee>
            <marquee behavior="scroll" direction="left" scrollamount="5" style={{
              background: '#FF0000',
              color: '#FFFF00',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px'
            }}>
              💀💀💀 Test 4 💀💀💀
            </marquee>
          </td>
        </tr>

        <tr>
          {/* Left Column */}
          <td width="50%" valign="top">
            <table width="100%" cellPadding="10" cellSpacing="2" border="2" style={{ background: '#800080', borderColor: "#FF00FF" }}>
              <tr>
                <td align="center" style={{ background: '#FF0000' }}>
                  <font size="5" color="#FFFF00"><b>🎵 HIS GREATEST HITS 🎵</b></font>
                </td>
              </tr>
              <tr>
                <td style={{ background: '#000000' }}>
                  {topTracks.map((track, idx) => (
                    <div key={idx} style={{ margin: '5px 0' }}>
                      <button
                        onClick={() => setSelectedTrack(track)}
                        style={{
                          background: selectedTrack === track ? '#FF0000' : '#0000FF',
                          color: '#FFFF00',
                          border: '2px outset #808080',
                          padding: '5px 10px',
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          width: '100%'
                        }}
                      >
                        ♪ {track} ♪
                      </button>
                    </div>
                  ))}

                  {selectedTrack && (
                    <div style={{
                      marginTop: '20px',
                      padding: '15px',
                      background: '#FF0000',
                      border: '3px ridge #808080',
                      textAlign: 'center'
                    }}>
                      <font size="4" color="#FFFF00">
                        <blink>NOW PLAYING:</blink><br />
                        <b>{selectedTrack}</b>
                      </font><br />
                      <font size="2" color="#00FF00">
                        ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫
                      </font>
                    </div>
                  )}
                </td>
              </tr>
            </table>

            <br />

            {/* Web ring */}
            <table width="100%" cellPadding="5" cellSpacing="2" border="1" style={{ background: '#008000', marginTop: "auto", borderColor: "#00FF00" }}>
              <tr>
                <td align="center">
                  <font size="3" color="#FFFF00"><b>XXXTENTACION WEBRING</b></font><br />
                  <font size="2" color="#FFFFFF">
                    <a href="#" style={{ color: '#00FFFF' }}>&lt;&lt; PREV</a> |
                    <a href="#" style={{ color: '#00FFFF' }}>RANDOM</a> |
                    <a href="#" style={{ color: '#00FFFF' }}>NEXT &gt;&gt;</a><br />
                    <a href="#" style={{ color: '#FFFF00' }}>JOIN THE RING!</a>
                  </font>
                </td>
              </tr>
            </table>
          </td>

          {/* Right Column */}
          <td width="50%" valign="top">
            <table width="100%" cellPadding="10" cellSpacing="2" border="2" style={{ background: '#008000', borderColor: "#00FF00" }}>
              <tr>
                <td align="center" style={{ background: '#FF0000' }}>
                  <font size="5" color="#FFFF00"><b>📝 SIGN MY GUESTBOOK! 📝</b></font>
                </td>
              </tr>
              <tr>
                <td style={{ background: '#000000' }}>
                  <form onSubmit={(e) => { e.preventDefault(); addGuestbookEntry(); }}>
                    <font color="#FFFF00">Your Name:</font><br />
                    <input
                      type="text"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '3px',
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif',
                        border: '2px inset #808080'
                      }}
                    /><br /><br />

                    <font color="#FFFF00">Message:</font><br />
                    <textarea
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '3px',
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif',
                        border: '2px inset #808080',
                        resize: 'none'
                      }}
                    /><br /><br />

                    <input
                      type="submit"
                      value="SIGN GUESTBOOK!"
                      style={{
                        background: '#FF0000',
                        color: '#FFFF00',
                        border: '2px outset #808080',
                        padding: '5px 15px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    />
                  </form>

                  <br />
                  <hr color="#FF00FF" size="3" />

                  <div style={{
                    height: '200px',
                    overflow: 'auto',
                    background: '#800000',
                    border: '2px inset #808080',
                    padding: '5px'
                  }}>
                    {guestbookEntries.map((entry, idx) => (
                      <div key={idx} style={{
                        marginBottom: '10px',
                        borderBottom: '1px dotted #FFFF00',
                        paddingBottom: '5px'
                      }}>
                        <font size="1" color="#00FF00">{entry}</font>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            </table>

            <br />

            {/* Stats counter */}
            <table width="100%" cellPadding="5" border="1" style={{ background: '#800000', borderColor: "#FF0000" }}>
              <tr>
                <td align="center">
                  <font size="2" color="#FFFF00">
                    <b>VISITOR COUNTER:</b><br />
                    <font size="4" color="#00FF00">000420</font><br />
                    You are visitor #420 since 06/18/18
                  </font>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Bottom Row */}
        <tr>
          <td colSpan="2">
            <center>
              <table width="90%" cellPadding="15" cellSpacing="2" border="3" style={{ background: '#400040', borderColor: "#FF00FF" }}>
                <tr>
                  <td align="center">
                    <font size="6" color="#FF0000">
                      <blink>💔 R.I.P XXXTENTACION 💔</blink>
                      <blink>💔 R.I.P OBAMA 💔</blink>
                    </font><br />
                    <font size="4" color="#FFFF00">
                      "What is real will prosper"<br />
                      - Jahseh Dwayne Ricardo Onfroy
                    </font><br /><br />

                    <marquee behavior="alternate" width="50%">
                      <font color="#00FF00">🕊️ LLJ FOREVER 🕊️</font>
                    </marquee>
                  </td>
                </tr>
              </table>

              <br />

              <font size="1" color="#808080">
                This page is best viewed with Internet Explorer 4.0 at 800x600 resolution<br />
                Last updated: August 20, 2025 | Webmaster: xXx_REVENGE_WEBMASTER_xXx<br />
                <a href="#" style={{ color: '#00FFFF' }}>Email me!</a> |
                <a href="#" style={{ color: '#00FFFF' }}>View Source</a> |
                <a href="#" style={{ color: '#00FFFF' }}>Sign Guestbook</a><br />
                <br />

              </font>
              <img src="/fatfree.gif" width="160" height="30" style={{ background: '#FFFF00', color: '#000000', padding: '2px', border: '1px solid #000', marginTop: "auto" }} />
              <img src="/fatfree.gif" width="160" height="30" style={{ background: '#FFFF00', color: '#000000', padding: '2px', border: '1px solid #000', marginTop: "auto" }} />
            </center>
          </td>
        </tr>
      </table>
    </div>
  );
}