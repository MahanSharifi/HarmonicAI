import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "~/components/ui/menubar"
  
  export function Menu() {
    return (
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Harmonic.AI</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Harmonic.AI</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Settings <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Connect To Spotify <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Sign Into Google <MenubarShortcut>⇧⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarShortcut />
            <MenubarItem>
              Quit Application <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset disabled>
              Show Status Bar
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
            <MenubarItem disabled inset>
              Enter Full Screen
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup value="Mahan">
              <MenubarRadioItem value="Trevor">Trevor</MenubarRadioItem>
              <MenubarRadioItem value="Eden">Eden</MenubarRadioItem>
              <MenubarRadioItem value="Mahan">Mahan</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Manage Family...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Account...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  