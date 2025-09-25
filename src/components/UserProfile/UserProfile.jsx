import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-sm font-medium text-foreground">احمد محمدی</p>
        <p className="text-xs text-muted-foreground">مدیر انبار مرکزی</p>
      </div>
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder-user.jpg" alt="احمد محمدی" />
        <AvatarFallback className="bg-primary text-primary-foreground font-medium">
          ا.م
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserProfile;
