function OnLoad() {
  cream = new Theme('Cream', '#f5f3ea', '#e8dfb7', '#e5d280', '#dbc975');
  dark = new Theme('Dark', '#636363', '#292929', '#525252', '#424242');
  light = new Theme('Light', '#e0e0e0', '#b3b3b3', '#ededed', '#d9d9d9');
  console.log(document.cookie);

  DisplayWindowWithTheme(cream);
}

function DisplayWindowWithTheme(WebsiteTheme) {
  SetCookie('Theme', WebsiteTheme.Name);
  
  document.documentElement.style.setProperty('--bg-color', WebsiteTheme.bgcolor);
  document.documentElement.style.setProperty('--text-color', WebsiteTheme.textColor);
  document.documentElement.style.setProperty('--ui-color', WebsiteTheme.UIColor);
  document.documentElement.style.setProperty('--button-color', WebsiteTheme.buttonColor);
}

function SetCookie(Name, Value) {
  document.cookie = Name + '=' + Value + ';';
}

class Theme {
  constructor(Name, BackgroundColor, TextColor, UIColor, ButtonColor) {
    this.Name = Name;
    this.bgcolor = BackgroundColor;
    this.textColor = TextColor;
    this.UIColor = UIColor;
    this.buttonColor = ButtonColor;
  }
}

var cream = new Theme();
var dark = new Theme();
var light = new Theme();

function ShowSettings() {
  SwitchIds('SettingsHidden', 'SettingsShown');
}

function ShowThemes() {
  var elements = document.getElementsByClassName('ThemeSetting');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id == 'HideThemes') {
      elements[i].id = 'ShowThemes';
    } else {
      elements[i].id = 'HideThemes';
    }
  }


}

function SelectTheme(NewTheme) {
  var element = document.getElementById('ThemeButton').innerHTML = NewTheme;
  if (NewTheme == 'Cream') {
    DisplayWindowWithTheme(cream);
  } else if (NewTheme == 'Dark') {
    DisplayWindowWithTheme(dark);
  } else {
    DisplayWindowWithTheme(light);
  }
  ShowThemes();
}

function SwitchIds(Current, New) {
  var element = document.getElementById(Current);
  if (element != null) {
    element.id = New;
  } else {
    element = document.getElementById(New);
    element.id = Current;
  }
  return element;
}
