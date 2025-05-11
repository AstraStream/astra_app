import Icons from "@/components/Icons";

export const links = {
    menu: [
        {
            Icon: Icons.home,
            title: "Home",
            route: "/"
        }
    ],
    library: [
        {
            Icon: Icons.user,
            title: "Artist",
            route: "/artists"
        },
        {
            Icon: Icons.disc,
            title: "Albums",
            route: "/albums"
        },
        {
            Icon: Icons.song,
            title: "Genres",
            route: "/genres"
        },
        {
            Icon: Icons.heart,
            title: "Liked Songs",
            route: "/liked"
        }
    ]
}