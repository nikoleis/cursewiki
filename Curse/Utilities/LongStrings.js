//************************************ LONG STRINGS ************************************//
/** Initializes all the long strings needed to split them from the rest of the code */
function InitHelpMsg() {
  window.helpTxt = `<pre>Your calling ID: ${cursedConfig.commandChar + cursedConfig.slaveIdentifier}
    ${ChatRoomCharacter.map(el => {return { Name: el.Name, isCursed: el.isCursed };}).filter(n => n.Name == cursedConfig.slaveIdentifier && n.isCursed).length > 1
    ? "WARNING: Potential clash with another character!" : ""}

    //WEARER FUNCTIONS//

    >>> Curses <<<
    *NEW*-curseitem [group] [hours]
    
    >>> Information <<<
    *NEW*-tip
    *NEW*-tip reset
    -help
    -showstrikes
    -showblacklist
    -listsentences

    >>> Config Commands <<<
    *NEW*-togglecommand [command]
    -quickban
    -wardrobev2
    -eatcommands
    -hidedisplay
    -restraintvanish
    -isclassic
    -issilent
    -blacklist [a member number]
    -mistress [a member number]
    -owner [a member number]
    -commandchar [! / & / $ / #]
    -identifier [new identifier]
    -forwardall
    -savecolors
    INTENSE V:-capture

    >>>Speech Commands<<<
    INTENSE:-talk [target id] [sentence id]
    
    >>> Other Commands <<<
    -draw [nb of cards] [players]
    -shuffle
    INTENSE V:-nickname [Number] [Name]
    INTENSE V:-deletenickname [Number] [Name]

    //PUBLIC FUNCTIONS//
    *NEW*-listoffcommands
    -help
    -respect
    -title [title to add/rem]
    -punish
    *NEW*-reward
    -edge
    -asylumtimeleft
    -readnote
    -sendnote
    -orgasmcount
    INTENSE V:-nickname [Name]
    INTENSE V:-blocknickname
    INTENSE V:-allownickname
    INTENSE V: -respectnickname
    INTENSE V:-capture

    //MISTRESS FUNCTIONS//
    >>> Basic Commands<<<
    -kneel
    -cursereport
    -showstrikes
    -changestrikes [+/- nb strikes]
    -enforce [a member number] [optional custom title instead of defaults]
    -mtitle [number(optional)] [title to add/rem]
    -mistress [a member number]
    -public
    -deactivateonpresence
    -savecolors
    INTENSE V:-mnickname [Number] [Name]
    INTENSE V:-deletenickname [Number]
    INTENSE V:-respectnickname [a member number]

    >>>Speech Commands<<<
    -dolltalk
    -mute
    -cursedspeech
    -banword [the word itself]
    -banbegging [on/off]
    -banfirstperson [on/off]
    -clearwords
    -contractions
    
    >>>Curses<<<
    -curseitem [group]
    -curseitem [group] [hours]
    *NEW*-clothed
    -naked
    -vibes
    *NEW*-vibratorintensity [off,max,etc.]
    -permakneel
    
    -mittens
    -paws
    -gag
    -blindfold
    -hood
    -earplugs
    -dildogag
    -panties
    -screws
    -doublegag
    
    >>>Configurations<<<
    *NEW* -loadpresetcurses [name]
    *NEW* -loadpreset [name]
    *NEW* -savepreset [name]

    //OWNER AND WEARER FUNCTIONS//
    >>> Information <<<
    -speechreport
    -showmistresses
    -showowners
    -showenforced
    -shownicknames
    -configreport
    *NEW*-listpresets
    
    //OWNER FUNCTIONS//
    >>>Basic Commands<<<
    -asylum [nb of hours]
    *NEW* -sendasylum
    -owner [a member number]
    -otitle [Number] [Title]
    INTENSE V:-onickname [Number] [Name]

    >>>Configuration Commands<<<
    *NEW*-retype
    -resetorgasmcount
    -guestnotes
    -readnotes
    -disablepunishments
    -onlyonpresence
    -restrainplay
    -fullpublic
    -afk
    -note
    -reminderinterval [seconds]
    -clearallreminders
    INTENSE VERSION: -leash
    INTENSE VERSION: -norescue
    INTENSE VERSION: -sensdep
    INTENSE VERSION:-preventdc
    INTENSE VERSION:-meterlocked
    INTENSE VERSION:-meteroff
    *NEW* INTENSE VERSION:-secretorgasm
    *NEW* INTENSE VERSION:-blockooc
    *NEW* INTENSE VERSION:-safeword
    *NEW* INTENSE VERSION:-disableblocking

    >>>Club rules Commands<<<
    -forcedlabor
    -remoteself
    -remoteblock
    -unlockself
    -keyblock
    -blockchange
    
    >>>Speech Commands<<<
    -enforceentrymessage
    -entrymessage [sentence]
    INTENSE V:-restrainedspeech
    INTENSE V:-self [I, this slave, etc.]
    INTENSE V:-target [id] [target]
    INTENSE V:-sentence [id] [sentence]
    INTENSE V:-listsentences
    INTENSE V: -forcedsay [sentence]
    INTENSE V: -say [sentence]
    INTENSE V: -fullmute
    INTENSE V: -enablesound
    INTENSE V: -sound ["oink", "meow", ...]

    >>>Curses<<<
    -forbidorgasm
    -blockorgasm
    -clearcurses
    -reminders
    -togglereminder [reminder]
    
    -belt
    
    //CLUB OWNER FUNCTIONS//
    >>>Configuration Commands<<<
    -ctitle [Number] [Title]
    -looseowner
    INTENSE VERSION: -lockowner
    INTENSE VERSION: -locknewlover
    INTENSE VERSION: -locknewsub
    INTENSE VERSION: -onickname [Number] [Name]

    ---------
    More on various features:
    https://github.com/ace-1331/
    ace12401-cursedscript/wiki
    ---------
    Made by ace (12401) - Ace__#5558
    Official release: V${currentVersion}
    </pre>`;
}
