import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

function Navbar() {
  return (
    <NavigationMenu className="min-w-full border-b sticky min-h-10 top-0">
      <div className="flex w-full justify-between mx-2">
        <NavigationMenuList></NavigationMenuList>
        <NavigationMenuList className="flex justify-end">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}

export { Navbar }
